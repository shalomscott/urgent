import { Status } from "./message-status";


export class Message {

    constructor(public id: string,
                public body: string,
                public date: Date,
                public status: Status,
                public email: string) {  
    }
}