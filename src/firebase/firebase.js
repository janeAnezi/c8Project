
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-Eucx2zaIhxQQT8gvG5sEiXc3SLFhmrA",
  authDomain: "hertectrailproject.firebaseapp.com",
  projectId: "hertectrailproject",
  storageBucket: "hertectrailproject.appspot.com",
  messagingSenderId: "1066332137003",
  appId: "1:1066332137003:web:004a78f00caa63ea646c6e",
  measurementId: "G-9DHPXV383W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;