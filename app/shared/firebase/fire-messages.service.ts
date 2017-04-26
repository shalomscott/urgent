import { Injectable } from "@angular/core";
import { Message } from "../message/message"
import { Status } from "../message/message-status"
import firebase = require("nativescript-plugin-firebase");

@Injectable()
export class FireMessages
{
	add(message: Message): Promise<string>
	{
		return firebase.push('/messages', message)
		.then(result => result.key);
	}

	query(ids: string[], onQueryResult: (result: Message) => void): void
	{
		firebase.query(
			(result) => onQueryResult(result.value),
			'/messages',
			{
				singleEvent: false,
				orderBy: {
					type: firebase.QueryOrderByType.CHILD,
					value: 'date'
				}
			});
	}

	send(id: string)
	{
		// Send message by id
	}

	addOnStatusChangeListener(id: number, listener: (status: Status) => void)
	{
	}

	updateStatus(id: number, status: Status)
	{
	}
}