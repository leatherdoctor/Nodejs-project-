document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Send a POST request to the server to handle the signup process
    fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fullname, email, password })
    })
    .then(response => {
        if (response.ok) {
            console.log('Signup successful');
            // Redirect the user to the login page or another destination
            window.location.href = 'INDEX.html'; // Replace 'login.html' with the URL of your login page
        } else {
            console.error('Signup failed');
            // Handle signup failure, such as displaying an error message to the user
            alert('Signup failed. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error during signup:', error);
        alert('An unexpected error occurred during signup. Please try again later.');
    });
});
