import React, { useState } from 'react';
import './Recommendation.css'; // Import your CSS file for styling

const Recommendations = ({ isLoggedIn, onLoginStatusChange }) => {
  const handleLogin = () => {
    // Logic to handle login
    // For example, you can set isLoggedIn to true and notify the parent component
    onLoginStatusChange(true);
    window.location.href = 'http://127.0.0.1:5500/Login/INDEX.HTML';
  };

  return (
    <div className="recommendations-container">
      <p>Need recommendations?</p>
      <p>Login to our page!</p>
      <button className="login-button" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Recommendations;
