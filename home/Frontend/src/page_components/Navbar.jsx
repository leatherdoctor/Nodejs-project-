// Import React, useState, useEffect, and logo
import React, { useState, useEffect } from 'react';
import logo from 'D:/Project_wb/home/Frontend/src/assets/LOGO1.png';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Navbar.css'; // Import your CSS file for styling

const Navbar = ({ onLoginStatusChange }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // Get the navigate function from useNavigate

  useEffect(() => {
    // Check if there's a login state stored in localStorage
    const storedLoginState = localStorage.getItem('isLoggedIn');
    if (storedLoginState === 'true') {
      setIsLoggedIn(true);
      onLoginStatusChange(true); // Notify parent about login status
    }
  }, []);

  // Function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'http://127.0.0.1:5500/Login/INDEX.HTML';
    onLoginStatusChange(true); // Notify parent about login status
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
    setTimeout(() => {
      alert('You are logged out!');
    }, 1000); // Alert appears after 1 second (1000 milliseconds)
    onLoginStatusChange(false); // Notify parent about login status
  };
  
  const navigateToAction = () => {
    navigate('/action'); // Navigate to the /action route
  };

  const navigateToAdventure = () => {
    navigate('/adventure'); // Navigate to the /adventure route
  };

  // Function to navigate to the Free page
  const navigateToFree = () => {
    navigate('/free'); // Navigate to the /free route
  };

  // Function to handle search form submission
  const handleSearch = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const searchQuery = event.target.elements.searchInput.value; // Get the search query from the input field
    // Execute the XSS attack by injecting a malicious script into the search results
    document.getElementById('searchResults').innerHTML = searchQuery;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-body fixed-top" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="AdventureRealm Logo" className="navbar-logo" /> 
          AdventureRealm
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {!isLoggedIn ? (
              <li className="nav-item">
                <button className="btn btn-link nav-link" onClick={handleLogin}>Login</button>
              </li>
            ) : (
              <li className="nav-item">
                <button className="btn btn-link nav-link" onClick={handleLogout}>Logout</button>
              </li>
            )}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Genres
              </a>
              <ul className="dropdown-menu">
                <li><button className="dropdown-item" onClick={navigateToAction}>Action</button></li>
                <li><button className="dropdown-item" onClick={navigateToAdventure}>Adventure</button></li>
                <li><a className="dropdown-item" href="/">Racing</a></li>
                <li><a className="dropdown-item" href="/">Puzzle</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><button className="dropdown-item" onClick={navigateToFree}>Free</button></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSearch} role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="searchInput" id="searchInput" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
      {/* Display search results here (vulnerable to XSS) */}
      <div id="searchResults"></div>
    </nav>
  );
}

export default Navbar;
