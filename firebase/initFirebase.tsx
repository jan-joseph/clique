// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APPL_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function initFirebase() {
	initializeApp(firebaseConfig);
	console.log("Firebase init was successful");
}
