import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

import { Router } from "@angular/router";

import { User } from "../../shared/firebase/user";
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

  user: User;
  isLoggingIn = true;
  @ViewChild("container") container: ElementRef;

  constructor(private router: Router, private fireAuth: FireAuth, private page: Page){
    this.user = new User();
    this.user.email = "itai.schwed@gmail.com";
    this.user.password = "password";
  }

  ngOnInit(): void {
            this.page.actionBarHidden = true;
            this.page.backgroundImage = "res://bg_login";
        }

  submit() {
    if (this.isLoggingIn) {
      console.log("isis - hi 1");
      this.login();
    }   
    else {
      this.signUp();
    }
}

login() {
      console.log("isis - hi 2");
    this.fireAuth.login(this.user)
                    .then(user => {
                      console.log(JSON.stringify(user));
                      this.router.navigate(["/list"]);
                    })
                    .catch((errorMessage) => alert({
                                                      title: "Error",
                                                      message: errorMessage,
                                                      okButtonText: "ok"}));
  }

signUp() {
    this.fireAuth.signUp(this.user)
                    .then(
                      () => {
                        alert("Your account was successfully created.");
                        this.toggleDisplay();
                      })
                    .catch((errorMessage) => alert({
                                                      title: "Error",
                                                      message: errorMessage,
                                                      okButtonText: "ok"}));
  }

  toggleDisplay(){
    this.isLoggingIn = ! this.isLoggingIn;
    let container = <View>this.container.nativeElement;
  container.animate({
    backgroundColor: this.isLoggingIn ? new Color("white") : new Color("#301217"),
    duration: 500
  });
  }
}