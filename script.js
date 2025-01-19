const firebaseConfig = {
  apiKey: "AIzaSyCxGD1ZyCegaXf7eB6_YmUoddCGG7dIEQw",
  authDomain: "bandon-dunes-trip.firebaseapp.com",
  projectId: "bandon-dunes-trip",
  storageBucket: "bandon-dunes-trip.firebasestorage.app",
  messagingSenderId: "4652080154",
  appId: "1:4652080154:web:bca9be3964d415360645a3"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

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
