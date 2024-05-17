import React, { useState, useEffect } from 'react';
import CardCarousel from './CardCarousel';

const Action = () => {
    const [actionGames, setActionGames] = useState([]);
    // const history = useHistory(); // Get the history object

    useEffect(() => {
        // Fetch games with Game_type as "Action"
        fetch('http://localhost:3300/games?type=Action') // Assuming your server supports filtering by game type
            .then(response => response.json())
            .then(data => setActionGames(data))
            .catch(error => console.error('Error fetching Action games:', error));
    }, []);

    const navigateToHomePage = () => {
        // Navigate to the home page route
        window.location.href = '/home';
    };

    return (
        <div className="action-container">
            <h1 className="heading">Adventure Games</h1>
            <button className="home-button" onClick={navigateToHomePage}>Home</button> {/* Button in top-left corner */}
            <CardCarousel games={actionGames} />
        </div>
    );
};

export default Action;
