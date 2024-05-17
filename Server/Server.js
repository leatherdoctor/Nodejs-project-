const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(cors({
  }));
  
  // Middleware to parse JSON request bodies
  app.use(express.json());
  

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

// Route to handle login requests
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Query the database for authentication
    // const query = 'SELECT * FROM login WHERE Name = ? AND Password = ?';
    
    const query = 'SELECT * FROM login WHERE Name = ? AND Password = ?';
    // Log the SQL query with user inputs (for demonstration purposes)
    console.log(`SQL Query: SELECT * FROM login WHERE Name = '${username}' AND Password = '${password}'`);
    connection.query(query, [username, password], (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ success: false, message: 'Internal server error' });
            return;
        }

        if (results.length > 0) {
            res.status(200).json({ success: true, message: 'Authentication successful' });
        } else {
            res.status(401).json({ success: false, message: 'Invalid username or password' });
        }
    });
});

// Route to handle signup requests
app.post('/signup', (req, res) => {
    const fullname = req.body.fullname;
    const email = req.body.email;
    const password = req.body.password;

    // Insert the signup information into the login table
    const query = 'INSERT INTO login (Name, Email, Password) VALUES (?, ?, ?)';
    connection.query(query, [fullname, email, password], (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ success: false, message: 'Internal server error' });
            return;
        }

        // Signup successful
        res.status(201).json({ success: true, message: 'Signup successful' });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
