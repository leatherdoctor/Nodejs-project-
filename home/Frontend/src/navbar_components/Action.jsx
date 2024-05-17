import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import CardCarousel from './CardCarousel';
import styles from './cards.module.css'; // Import CSS module

const Action = () => {
    const [actionGames, setActionGames] = useState([]);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        // Fetch games with Game_type as "Action"
        fetch('http://localhost:3300/games')
            .then(response => response.json())
            .then(data => setActionGames(data))
            .catch(error => console.error('Error fetching Action games:', error));
    }, []);

    const navigateToGamePage = (gameId) => {
        // Navigate to the GamePage component with the game ID as a parameter
        console.log('Game ID clicked:', gameId);
        navigate(`/gp/${gameId}`); // Use navigate to navigate to the GamePage with gameId
    };

    const navigateToHomePage = () => {
        // Navigate to the home page route
        console.log('Navigating to home page');
        navigate('/home'); // Use navigate to navigate to the home page
    };

    return (
        <div className={styles['action-container']}>
            <h1 className={styles.heading}>Action Games</h1>
            <button className={styles['home-button']} onClick={navigateToHomePage}>Home</button>
            <CardCarousel games={actionGames} onCardClick={navigateToGamePage} />
        </div>
    );
};

export default Action;
