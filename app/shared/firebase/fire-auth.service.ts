import { Injectable } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");

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
	signUp(email: string, password: string)
	{
		return firebase.createUser({ email, password })
		.then(result => console.log("Created new user:  " + JSON.stringify(result)));
	}

	login(email: string, password: string)
	{
		return firebase.login({ 
			type: firebase.LoginType.PASSWORD,
			email,
			password
		})
		.then(result => console.log("User login:  " + JSON.stringify(result)));
	}

	logout()
	{
		return firebase.logout()
		.then(result => console.log("User logout:  " + JSON.stringify(result)));
	}
}