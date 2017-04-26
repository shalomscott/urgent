import { Injectable } from "@angular/core";
import { Message, MessageStatus } from "../types"
import firebase = require("nativescript-plugin-firebase");

@Injectable()
export class FireMessages
{
	add(message: Message): Promise<string>
	{
		message.timestamp = firebase.ServerValue.TIMESTAMP;
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
					value: 'timestamp'
				}
			});
	}

	send(id: string)
	{
		// Send message by id
	}

	addOnStatusChangeListener(id: number, listener: (status: MessageStatus) => void)
	{
	}

	updateStatus(id: number, status: MessageStatus)
	{
	}
}