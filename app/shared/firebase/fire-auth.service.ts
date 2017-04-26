import { Injectable } from "@angular/core";
import { User } from "./firebase-types"
import firebase = require("nativescript-plugin-firebase");

@Injectable()
export class FireAuth
{
	signUp(user: User): Promise<string>
	{
		return firebase.createUser({
			email: user.email,
			password: user.password 
		})
		.then(result => {
			console.log("Created new user: " + JSON.stringify(result));
			return result.key;
		});
	}

	login(user: User): Promise<firebase.User>
	{
		console.log('Got user ' + JSON.stringify(user))
		return firebase.login({ 
			type: firebase.LoginType.PASSWORD,
			email: user.email,
			password: user.password
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