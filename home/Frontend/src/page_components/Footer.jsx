import React, { useEffect, useState } from 'react';
import './Navbar.css'; // Import your CSS file for styling

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setShowFooter(isAtBottom);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    showFooter && (
      <footer className="footer-container">
        <p>This is the footer content.</p>
      </footer>
    )
  );
}

export default Footer;
