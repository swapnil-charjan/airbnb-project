const express = require('express');
const dotenv = require('dotenv');
const homeRoute = require('./routes/homeRoute'); // this is now the actual router

dotenv.config();
const app = express();
app.use(express.json());

app.use(homeRoute);

// Global error handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
});

module.exports = app;
