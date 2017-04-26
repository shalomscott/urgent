import { Component } from "@angular/core";
import { Message } from "../../shared/message/message";
import { Status } from "../../shared/message/message-status";

@Component({
  selector: "list",
  templateUrl: "pages/message-maker/message-maker.html",
  styleUrls: ["pages/message-maker/message-maker.css"]
})
export class MessageMakerComponent{
    message: Message;

    constructor(){
        this.message = new Message("1", "", undefined, Status.PENDING, "");
    }
    
    send(args) {
        if(this.validateMessage()) {
            this.sendMessage();
        }
        else {
            alert({
                    title: "Incorrect details",
                    message: "Incorrect details, please refilled them",
                    okButtonText: "ok"
                  });
        }
    }

    validateMessage() {

        return this.message.email.trim() !== "" && this.message.body.trim() !== "" ;
    }

    sendMessage() {
    }
}