// SecondPage.js
import React, { useState } from 'react';
import Navbar from './page_components/Navbar';
import SC from './page_components/SC';
import Footer from './page_components/Footer';
import AboutUsContainer from './page_components/AboutUs';
import GameCardsCarousel from './page_components/Game_Cards';
import TimeandOffer from './page_components/Timer';
import FreeOffer from './page_components/Free';
import Fc from './page_components/Fc';
import Recommendations from './page_components/Recommendations';
import ScrollerContainer from './page_components/CardScroller';

const SecondPage = () => {
  // State to track whether the user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login status update
  const handleLoginStatus = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <>
      {/* Pass down onLoginStatusChange prop to Navbar */}
      <Navbar isLoggedIn={isLoggedIn} onLoginStatusChange={handleLoginStatus} />
      <SC />
      <AboutUsContainer />
      <TimeandOffer />
      <GameCardsCarousel />
      <FreeOffer />
      <Fc />
      {/* Pass down isLoggedIn and onLoginStatusChange props to Recommendations */}
      {isLoggedIn ? <ScrollerContainer /> : <Recommendations isLoggedIn={isLoggedIn} onLoginStatusChange={handleLoginStatus} />}
    </>
  );
}

export default SecondPage;
