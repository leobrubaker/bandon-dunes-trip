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

// Your login and signup functions
function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      console.log('User logged in:', userCredential.user);
      // Redirect to protected page or update UI
    })
    .catch(error => {
      console.error('Login error:', error);
      // Display an error message to the user
    });
}

function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      console.log('User created:', userCredential.user);
      // Redirect to login page or update UI
    })
    .catch(error => {
      console.error('Signup error:', error);
      // Display an error message to the user
    });
}
