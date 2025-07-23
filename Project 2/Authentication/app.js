const express = require('express');
const dotenv = require('dotenv');

// Import routes    
const authRouter = require('./routes/authRouter');

dotenv.config();
const app = express();
app.use(express.json());

app.use(authRouter);

// Global error handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
});