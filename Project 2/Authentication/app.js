const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

// Import routes    
const authRouter = require('./routes/authRouter');

app.use(express.json());

// To serve static files (CSS, JS, Images)
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    console.log(req.url, req.method)
    next();
})

//Handle Routes
app.use(authRouter);

// Global error handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
});

exports.app = app;

