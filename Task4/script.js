document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login-button');
    const registerButton = document.getElementById('register-button');
    const message = document.getElementById('message');

    // Sample user data (for demonstration)
    const users = [
        { username: 'user1', password: 'password1' },
        { username: 'user2', password: 'password2' },
    ];

    loginButton.addEventListener('click', function() {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        const user = users.find(u => u.username === username);

        if (!user || user.password !== password) {
            message.textContent = 'Invalid credentials. Please try again.';
            message.style.color = 'red';
        } else {
            // Store user's authentication status in localStorage
            localStorage.setItem('authenticatedUser', username);

            // Redirect to the secured page
            window.location.href = 'secured.html';
        }
    });

    registerButton.addEventListener('click', function() {
        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;

        if (users.some(u => u.username === username)) {
            message.textContent = 'Username already exists. Please choose a different one.';
            message.style.color = 'red';
        } else {
            users.push({ username, password });
            message.textContent = 'Registration successful.';
            message.style.color = 'green';
        }
    });
});
