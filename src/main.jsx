import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig'; // Import your Firebase configuration
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import 'firebase/auth'; // For Firebase Authentication
import 'firebase/firestore';  // For Cloud Firestore



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
