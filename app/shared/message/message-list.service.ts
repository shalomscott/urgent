import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Config } from "../config";
import { Message } from "./message";

@Injectable()
export class MessageListService {
  constructor(private http: Http) {}

  load() {
    // let headers = new Headers();
    // headers.append("Authorization", "Bearer " + Config.token);

    // return this.http.get(Config.apiUrl + "Groceries", {
    //   headers: headers
    // })
    // .map(res => res.json())
    // .map(data => {
    //   let messageList = [];
    //   data.Result.forEach((message) => {
    //     messageList.push(new Message(message.Id, message.Name));
    //   });
    //   return messageList;
    // })
    // .catch(this.handleErrors);
  }

  add(name: string) {
  // let headers = new Headers();
  // headers.append("Authorization", "Bearer " + Config.token);
  // headers.append("Content-Type", "application/json");

  // return this.http.post(
  //   Config.apiUrl + "Groceries",
  //   JSON.stringify({ Name: name }),
  //   { headers: headers }
  // )
  // .map(res => res.json())
  // .map(data => {
  //   return new Message(data.Result.Id, name);
  // })
  // .catch(this.handleErrors);
}

  handleErrors(error: Response) {
    // console.log(JSON.stringify(error.json()));
    // return Observable.throw(error);
  }
}