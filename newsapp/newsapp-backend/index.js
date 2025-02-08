// index.js
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Static login credentials (for demonstration purposes)
const validEmail = 'user@example.com';
const validPassword = 'password123';

// Login route
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    if (email === validEmail && password === validPassword) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

// News route to fetch news data from NewsAPI
app.get('/api/news/:category', async (req, res) => {
    const category = req.params.category;
    try {
        const response = await axios.get(`https://newsapi.org/v2/everything`, {
            params: {
                q: category,
                apiKey: process.env.NEWS_API_KEY,
            },
        });
        res.json(response.data.articles);
    } catch (err) {
        console.error('Error fetching news:', err);
        res.status(500).json({ message: 'Failed to fetch news' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


