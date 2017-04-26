import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

import { Message } from "../../shared/message/message";
import { MessageListService } from "../../shared/message/message-list.service";
import { Status } from "../../shared/message/message-status";
import { Router } from "@angular/router";

import { TextField } from "ui/text-field";
import { registerElement } from "nativescript-angular/element-registry";
import {SetupItemViewArgs} from "nativescript-angular/directives";

@Component({
  selector: "list",
  templateUrl: "pages/list/list.html",
  providers: [MessageListService],
  styleUrls: ["pages/list/list-common.css", "pages/list/list.css"]
})
export class ListComponent implements OnInit {
  messageList: Array<Message> = [];

  constructor(private router: Router/*private messageListService: MessageListService*/) {
  }

  onSetupItemView(args: SetupItemViewArgs) {
    args.view.context.even = (args.index % 2 === 0);
    args.view.context.odd = (args.index % 2 === 1);
}

getStatusName(status) {
  return Status[status];
}

  ngOnInit() {

    // this.messageListService.load().subscribe(loadedGroceries => {
    //     loadedGroceries.forEach((messageObject) => {
    //       this.messageList.unshift(messageObject);
    //     });
    //   });

    var loadedGroceries = [
      new Message("1", "my name is itai", new Date(), Status.PENDING, "itai.schwed@gmail.com"),
      new Message("2", "my name is shalom", new Date(), Status.PENDING, "itai.schwed@gmail.com"),
      new Message("3", "my name is nick", new Date(), Status.PENDING, "itai.schwed@gmail.com")
    ];
    
    loadedGroceries.forEach((messageObject) => {
          this.messageList.unshift(messageObject);
    });
  }

  fabTap() {
     this.router.navigate(["/message-maker"]);
  }
}