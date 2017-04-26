import { Injectable } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");

import { User } from "./user";

firebase.init()
.then(instance =>
{
	console.log("firebase instance: " + JSON.stringify(instance));
})
.catch(error => 
{
	console.log("firebase.init error: " + error);
});

@Injectable()
export class FireAuth
{
	signUp(user: User)
	{
		return firebase.createUser({ email: user.email, password: user.password })
		.then(result => console.log("Created new user:  " + JSON.stringify(result)));
	}

	login(user: User)
	{
		console.log('Got user ' + JSON.stringify(user))
		return firebase.login({ 
			type: firebase.LoginType.PASSWORD,
			email: user.email,
			password: user.password
		})
		.then(result => console.log("User login:  " + JSON.stringify(result)));
	}

	logout()
	{
		return firebase.logout()
		.then(result => console.log("User logout:  " + JSON.stringify(result)));
	}
}