// script.js

// Mock database for storing users
let users = [];

// Register user
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    // Check if user already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        alert('User already exists!');
    } else {
        // Save user to mock database
        users.push({ username, password });
        alert('User registered successfully!');
    }

    // Clear input fields
    document.getElementById('registerUsername').value = '';
    document.getElementById('registerPassword').value = '';
});

// Login user
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Authenticate user
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        alert('Login successful!');
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('registerForm').style.display = 'none';
        document.getElementById('securedPage').style.display = 'block';
        document.getElementById('user').innerText = user.username;
    } else {
        alert('Invalid username or password');
    }

    // Clear input fields
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
});

// Logout user
document.getElementById('logoutBtn').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('securedPage').style.display = 'none';
});
