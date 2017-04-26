import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

import { Message, MessageStatus } from "../../shared/types";
import { MessageListService } from "../../shared/message-list.service";
import { Router } from "@angular/router";

import { TextField } from "ui/text-field";
import { registerElement } from "nativescript-angular/element-registry";
import {SetupItemViewArgs} from "nativescript-angular/directives";

@Component({
  selector: "list",
  templateUrl: "pages/list/list.component.html",
  providers: [MessageListService],
  styleUrls: [ "pages/list/list.component.css"]
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
  return MessageStatus[status];
}

  ngOnInit() {

    // this.messageListService.load().subscribe(loadedMessages => {
    //     loadedMessages.forEach((messageObject) => {
    //       this.messageList.unshift(messageObject);
    //     });
    //   });

    var loadedMessages = [
      new Message("itai.schwed@gmail.com", "my name is shalom", MessageStatus.PENDING, null),
      new Message("itai.schwed@gmail.com", "my name is shalom", MessageStatus.PENDING, null),
      new Message("itai.schwed@gmail.com", "my name is shalom", MessageStatus.PENDING, null)
    ];
    
    loadedMessages.forEach((messageObject) => {
          this.messageList.unshift(messageObject);
    });
  }

  fabTap() {
    //  this.router.navigate(["/message-maker"]);
  }
}