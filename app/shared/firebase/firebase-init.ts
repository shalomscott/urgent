import firebase = require("nativescript-plugin-firebase");

firebase.init()
.then(instance => console.log("firebase instance: " + JSON.stringify(instance)))
.catch(error => console.error("firebase.init error: " + error));