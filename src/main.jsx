import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig'; // Import your Firebase configuration

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
