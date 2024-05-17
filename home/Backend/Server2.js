const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const path = require('path');

const app = express();
const port = 3300;

// Enable CORS middleware
app.use(cors());
// Middleware to parse JSON request bodies
app.use(express.json());

// Serve static files from the Game_Images directory
app.use('/Game_Images', express.static(path.join(__dirname, 'Game_Images')));

// MySQL connection configuration
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'advwebproject'
});

// Connect to MySQL database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Route to fetch game data from Game_description table
app.get('/games', (req, res) => {
    const query = 'SELECT * FROM Game_description';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ success: false, message: 'Internal server error' });
            return;
        }
        res.status(200).json(results);
    });
});
// Route to fetch games with Original Cost and Discounted Cost equal to zero
app.get('/free-games', (req, res) => {
    const query = 'SELECT * FROM Game_description WHERE Discounted_Cost = 0';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ success: false, message: 'Internal server error' });
            return;
        }
        res.status(200).json(results);
    });
});

// Route to fetch image data from Game_images table
app.get('/images', (req, res) => {
    const query = 'SELECT * FROM Game_images';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ success: false, message: 'Internal server error' });
            return;
        }
        res.status(200).json(results);
    });
});
app.get('/requirements', (req, res) => {
    const gameId = req.query.Game_id; // Get gameId from query parameters
    const query = 'SELECT * FROM gamerequirements WHERE Game_id = ?';
    connection.query(query, [gameId], (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ success: false, message: 'Internal server error' });
            return;
        }
        res.status(200).json(results);
    });
});

app.get('/description', (req, res) => {
    const gameId = req.query.Desc_id; // Get gameId from query parameters
    if (!gameId) {
        res.status(400).json({ success: false, message: 'Game_id parameter is required' });
        return;
    }

    const query = 'SELECT * FROM gamedescriptions WHERE Desc_id = ?';
    connection.query(query, [gameId], (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ success: false, message: 'Internal server error' });
            return;
        }
        res.status(200).json(results);
    });
});


app.get('/games/:gameId', (req, res) => {
    const gameId = req.params.gameId; // Get gameId from URL parameter

    // Check if gameId is not a valid number or is missing
    if (!gameId || isNaN(gameId)) {
        res.status(400).json({ success: false, message: 'Invalid Game ID' });
        return;
    }

    const query = `SELECT * FROM Game_description WHERE Game_ID = ?`; // Use Game_ID field in the query
    connection.query(query, [gameId], (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ success: false, message: 'Internal server error' });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ success: false, message: 'Game not found' });
            return;
        }
        res.status(200).json(results[0]); // Send the first result (assuming Game_ID is unique)
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});