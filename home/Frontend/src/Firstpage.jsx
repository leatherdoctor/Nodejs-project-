import React, { useState, useEffect } from 'react';
import Logo from './assets/LOGO1.png';
import './FirstPage.css';

const FirstPage = ({ setShowSecondPage }) => {
  const [showLogo, setShowLogo] = useState(false);
  const [showContainer, setShowContainer] = useState(true);
  const [showFirstPage, setShowFirstPage] = useState(true);

  useEffect(() => {
    const showTimeout = setTimeout(() => {
      setShowLogo(true);
    }, 250);

    const hideTimeout = setTimeout(() => {
      setShowContainer(false); // Hide the container after animation
      setTimeout(() => {
        setShowFirstPage(false); // Remove the first page from the app after animation
        setShowSecondPage(true); // Show the second page after animation
      }, 2000); // Adjust the delay to match your container animation duration
    }, 4000);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, [setShowSecondPage]);

  const handleLogoAnimationEnd = () => {
    setShowLogo(false); // Hide the logo after animation
  };

  if (!showFirstPage) {
    return null; // Render nothing if the first page should not be shown
  }

  return (
    <div className={`container ${showContainer ? 'visible' : 'hidden'}`}>
      <div className={`logo-container ${showLogo ? 'visible' : 'hidden'}`}>
        {showLogo && (
          <img
            src={Logo}
            className="logo"
            alt="Website Logo"
            onAnimationEnd={handleLogoAnimationEnd}
          />
        )}
      </div>
    </div>
  );
}

export default FirstPage;
