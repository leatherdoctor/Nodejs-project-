document.addEventListener('DOMContentLoaded', () => {
  // Define the handleLogin function to handle login form submission
  const handleLogin = async (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Extract username and password from the form inputs
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
      // Send a POST request to the server for authentication
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      // Parse the response JSON data
      const data = await response.json();

      // Check if login was successful
      if (data.success) {
        // Redirect to the dashboard or another page upon successful login
        window.location.href = 'http://localhost:5173'; // Replace '/dashboard' with your desired URL
      } else {
        // Display an alert message for authentication failure
        alert('Authentication failed. Please check your username and password.');
      }
    } catch (error) {
      // Handle any errors that occur during the fetch request
      console.error('Error during login:', error);
      alert('An unexpected error occurred. Please try again later.');
    }
  };

  // Add event listener to the login form for form submission
  document.getElementById('login-form').addEventListener('submit', handleLogin);

  // Add event listener to the signup link for redirection to the signup page
  document.querySelector('.signup-link a').addEventListener('click', (event) => {
    // Prevent the default click behavior
    event.preventDefault();
    
    // Redirect the user to the signup page
    window.location.href = 'Signup.html'; // Replace 'Signup.html' with the URL of your signup page
  });
});
