// Authentication functionality
document.getElementById('login-btn').addEventListener('click', async () => {
  const email = prompt("Enter your email:");
  const password = prompt("Enter your password:");
  try {
    await auth.signInWithEmailAndPassword(email, password);
    alert("Logged in successfully!");
    updateUI(true);
  } catch (error) {
    alert("Login failed: " + error.message);
  }
});

document.getElementById('logout-btn').addEventListener('click', async () => {
  await auth.signOut();
  alert("Logged out successfully!");
  updateUI(false);
});

// Update UI based on login status
const updateUI = (isLoggedIn) => {
  document.getElementById('login-btn').style.display = isLoggedIn ? 'none' : 'inline-block';
  document.getElementById('logout-btn').style.display = isLoggedIn ? 'inline-block' : 'none';
  document.getElementById('content').style.display = isLoggedIn ? 'block' : 'none';
};

// Check login status on page load
auth.onAuthStateChanged(user => {
  updateUI(!!user);
});
