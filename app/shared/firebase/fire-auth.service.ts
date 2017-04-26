import { Injectable } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");

@Injectable()
export class FireAuth
{
	signUp(email: string, password: string): Promise<string>
	{
		return firebase.createUser({ email, password })
		.then(result => {
			console.log("Created new user: " + JSON.stringify(result));
			return result.key;
		});
	}

	login(email: string, password: string): Promise<firebase.User>
	{
		return firebase.login({ 
			type: firebase.LoginType.PASSWORD,
			email,
			password
		})
		.then(result => {
			console.log("User login: " + JSON.stringify(result));
			return result;
		});
	}

	logout(): Promise<any>
	{
		return firebase.logout()
		.then(result => {
			console.log("User logout: " + JSON.stringify(result));
			return result;
		});
	}
}