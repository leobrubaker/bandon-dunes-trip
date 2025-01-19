// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app-compat.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxGD1ZyCegaXf7eB6_YmUoddCGG7dIEQw",
  authDomain: "bandon-dunes-trip.firebaseapp.com",
  projectId: "bandon-dunes-trip",
  storageBucket: "bandon-dunes-trip.firebasestorage.app",
  messagingSenderId: "4652080154",
  appId: "1:4652080154:web:bca9be3964d415360645a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Rest of your login and signup functions
