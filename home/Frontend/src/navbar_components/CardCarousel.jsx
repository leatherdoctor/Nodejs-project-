import React, { useState, useEffect } from 'react';
import styles from './cards.module.css'; // Import CSS module

const CardCarousel = ({ games, onCardClick }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Fetch image data with the simulated sensitive key
        fetch(`http://localhost:3300/images?key=${getSensitiveKeyFromLocalStorage()}`)
            .then(response => response.json())
            .then(data => {
                setImages(data);
                console.log("Image Data Loaded", data);
            })
            .catch(error => console.error('Error fetching image data:', error));
    }, []);

    const handleClick = (gameId) => {
        console.log('Card clicked:', gameId); // Debugging statement
        if (typeof onCardClick === 'function') {
            onCardClick(gameId);
        } else {
            console.error('onCardClick is not a function');
        }
    };

    // Simulate getting sensitive key from local storage (vulnerable to XSS)
    function getSensitiveKeyFromLocalStorage() {
        let key = localStorage.getItem('sensitiveKey');
        if (!key) {
            key = generateRandomKey();
            // Vulnerable code: directly setting key without proper sanitization
            document.write(`<script>localStorage.setItem('sensitiveKey', '${key}');</script>`);
        }
        return key;
    }

    // Function to generate a random key
    function generateRandomKey() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const length = 32;
        let randomKey = '';
        for (let i = 0; i < length; i++) {
            randomKey += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return randomKey;
    }

    return (
        <div className={styles['card-carousel']}> {/* Use className from CSS module */}
            {games.map(game => {
                const image = images.find(img => img.Game_id === game.Game_id);
                const imagePath = image ? `http://localhost:3300${image.Image_location}` : '/Game_Images/default_image.jpg';
                const costInfo = game.Discount ? (
                    <div>
                        {/* <p><span className={styles.strikethrough}>Original Cost: ${game.Original_Cost}</span></p> */}
                        <p>Discounted Cost: ${game.Discounted_cost}</p>
                    </div>
                ) : (
                    <p>Cost: ${game.Original_Cost}</p>
                );

                return (
                    <div key={game.Game_id} className={styles.card} onClick={() => handleClick(game.Game_id)}> {/* Use className from CSS module */}
                        <img src={imagePath} alt={game.Game_name} />
                        <h3>{game.Game_name}</h3>
                        <p>Game Type: {game.Game_type}</p>
                        {costInfo}
                    </div>
                );
            })}
        </div>
    );
};

export default CardCarousel;
