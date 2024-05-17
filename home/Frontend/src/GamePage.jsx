import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './GamePage.module.css'; // Import CSS module

const GamePage = () => {
    const { gameId } = useParams(); // Get gameId from URL params
    const [game, setGame] = useState();
    const [image, setImage] = useState();
    const [req, setReq] = useState();
    const [desc, setDesc] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // State to handle errors
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (!gameId) {
            setError('Game ID is missing');
            setLoading(false);
            return;
        }

        // Fetch game details based on gameId
        fetch(`http://localhost:3300/games?Game_Id=${gameId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setGame(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching game details:', error);
                setError('Error fetching game details');
                setLoading(false);
            });

            fetch(`http://localhost:3300/images?Game_Id=${gameId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setImage(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching game details:', error);
                setError('Error fetching game details');
                setLoading(false);
            });

        fetch(`http://localhost:3300/requirements?Game_id=${gameId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setReq(data);
                setLoading(false); // Set loading to false once all data is fetched
            })
            .catch(error => {
                console.error('Error fetching requirements:', error);
                setError('Error fetching requirements');
                setLoading(false); // Set loading to false even if there's an error
            });

            fetch(`http://localhost:3300/description?Desc_id=${gameId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setDesc(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching game details:', error);
                setError('Error fetching game details');
                setLoading(false);
            });

    }, [gameId]); // Fetch data whenever gameId changes

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    if (loading) {
        return <div>Loading...</div>; // Show loading message while fetching data
    }

    if (error) {
        return <div>Error: {error}</div>; // Show error message if there's an error
    }

    if (!game) {
        return <div>Game not found</div>; // Show error message if game data is null
    }

    // Display all game details
    return (
        <div className={styles.container}>
            <div className={styles['game-name-container']}>
                <div className={styles['game-name']}>{game && game[gameId - 1] && game[gameId - 1].Game_name}</div>
            </div>
            <div className={styles['image-container']}>
                <img src={game && image && game[gameId - 1] && image[gameId - 1] ? `http://localhost:3300${image[gameId - 1].Image_location}` : ''} alt={game && game[gameId - 1] && game[gameId - 1].Game_name} className={styles['game-image']} />
            </div>
            <div className={styles['game-info']}>
                    <p className={styles['game-description']}>{desc && desc.length > 0 && desc[0] && desc[0].Description}</p>
                    <p className={styles['game-type']}>Game Type: {game && game[gameId - 1] && game[gameId - 1].Game_type}</p>
                    <div className={styles['cost-container']}>
                    <p className={styles['original-cost']}>Original Cost: <span className={styles['strikethrough']}>{game && game[gameId - 1] && game[gameId - 1].Original_Cost}</span></p>
                    <p className={styles['cost']}>Discounted Cost: {game && game[gameId - 1] && game[gameId - 1].Discounted_cost}</p>
                    </div>
                    <button className={styles['buy-button']}>Buy Now</button>
                    {/* <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter text for XSS attack" /> */}
                    {/* <div dangerouslySetInnerHTML={{ __html: inputValue }} /> */}
                </div>
            <div className={styles['details-container']}>
                <div className={styles['game-details']}>
                    <h2>System Requirements</h2>
                    <table className={styles['requirements-table']}>
                        <thead>
                            <tr>
                                <th>Minimum Requirements</th>
                                <th>Recommended Requirements</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{req && req.length > 0 && req[0]?.minimum_requirements}</td>
                                <td>{req && req.length > 0 && req[0]?.recommended_requirements}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default GamePage;
