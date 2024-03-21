// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD-Eucx2zaIhxQQT8gvG5sEiXc3SLFhmrA",
//   authDomain: "hertectrailproject.firebaseapp.com",
//   projectId: "hertectrailproject",
//   storageBucket: "hertectrailproject.appspot.com",
//   messagingSenderId: "1066332137003",
//   appId: "1:1066332137003:web:004a78f00caa63ea646c6e",
//   measurementId: "G-9DHPXV383W"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

// export default app;

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkI7GxPslS94qR3SbqxrnlWwoo5xPFH6E",
  authDomain: "mealpal-3185a.firebaseapp.com",
  projectId: "mealpal-3185a",
  storageBucket: "mealpal-3185a.appspot.com",
  messagingSenderId: "967341769015",
  appId: "1:967341769015:web:9b9cfeb5c532a7dfe25ab2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db, onAuthStateChanged };
export const auth = getAuth(app);
export default app;
