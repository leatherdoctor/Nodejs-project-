import React, { useState, useEffect } from 'react';

const FreeOffer = () => {
  const calculateTimeLeft = () => {
    const endTime = new Date("2024-04-28T00:00:00"); // Set end time to a specific date and time
    const difference = endTime.getTime() - new Date().getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    } else {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="time-and-offer-container">
      <h1>Free Game of the Week!</h1>
      <p>Offer Ends in:</p>
      <div className="time-counter">
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </div>
      <p>Hurry up! Don't miss out on our best offer!</p>
    </div>
  );
}

export default FreeOffer;
