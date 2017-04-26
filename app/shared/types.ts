export class Message {
	constructor(
		public email: string,
		public body: string,
		public status: MessageStatus,
		public timestamp: any // TODO: figure out what type to make this (firebase server timestamp)
	) {}
}

export enum MessageStatus {
	PENDING,
	DISMISSED,
	IN_PROGRESS,
	DONE
}