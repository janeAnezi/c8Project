// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/dynamic-links'; 
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig'; // Import your Firebase configuration
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyAlWBskH5MYivOgWXo-v0ML5J2N7pJnU58",
  authDomain: "get-referrals-project.firebaseapp.com",
  projectId: "get-referrals-project",
  storageBucket: "get-referrals-project.appspot.com",
  messagingSenderId: "32152799278",
  appId: "1:32152799278:web:ec8b80a134e327071277bf",
  measurementId: "G-BF6KGBSK8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
firebase.initializeApp(firebaseConfig);

// Initialize Analytics and get a reference to the service
const analytics = getAnalytics(app);
logEvent(analytics, 'notification_received');

export default firebase;