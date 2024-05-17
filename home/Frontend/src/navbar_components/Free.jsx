import React, { useState, useEffect } from 'react';
import CardCarousel from './CardCarousel';

const FreeGames = () => {
    const [freeGames, setFreeGames] = useState([]);

    useEffect(() => {
        // Fetch games with Original_cost and Discounted_cost equal to zero
        fetch('http://localhost:3300/games?Original_cost=0&Discounted_cost=0&type=Action') // Adjust the API endpoint according to your backend implementation
            .then(response => response.json())
            .then(data => setFreeGames(data))
            .catch(error => console.error('Error fetching Free games:', error));
    }, []);

    const navigateToHomePage = () => {
        // Navigate to the home page route
        window.location.href = '/home';
    };

    return (
        <div className="free-games-container">
            <h1 className="heading">Free Games</h1>
            <button className="home-button" onClick={navigateToHomePage}>Home</button> {/* Button in top-left corner */}
            <CardCarousel games={freeGames} />
        </div>
    );
};

export default FreeGames;
