import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

import { Router } from "@angular/router";

import { FireAuth } from "../../shared/firebase/fire-auth.service";

import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";

@Component({
  selector: "my-app",
  templateUrl: "./pages/login/login.html",
  providers: [FireAuth],
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  isLoggingIn = true;
  @ViewChild("container") container: ElementRef;

  constructor(private router: Router, private fireAuth: FireAuth, private page: Page) {
    this.email = "itai.schwed@gmail.com";
    this.password = "password";
  }

  ngOnInit(): void {
    this.page.actionBarHidden = true;
    this.page.backgroundImage = "res://bg_login";
  }

  submit() {
    if (this.isLoggingIn) {
      this.login();
    }
    else {
      this.signUp();
    }
  }

  login() {
    this.fireAuth.login(this.email, this.password)
    .then(
      () => this.router.navigate(["/list"]),
      (errorMessage) => alert({
        title: "Error",
        message: errorMessage,
        okButtonText: "ok"
      })
    );
  }

  signUp() {
    this.fireAuth.signUp(this.email, this.password)
      .then(
      () => {
        alert("Your account was successfully created.");
        this.toggleDisplay();
      })
      .catch((errorMessage) => alert({
        title: "Error",
        message: errorMessage,
        okButtonText: "ok"
      }));
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
    let container = <View>this.container.nativeElement;
    container.animate({
      backgroundColor: this.isLoggingIn ? new Color("white") : new Color("#301217"),
      duration: 500
    });
  }
}