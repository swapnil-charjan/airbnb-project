const users = require('../modules/authentication');

const getAuth = (req, res, next) => {
    res.status(200).json({ message: 'Authentication successful' });
};

const postAuth = (req, res, next) => {
    const { username, password, confirmPassword, email } = req.body;
    if (username && password && confirmPassword && email) {
       users.create({ username, password, confirmPassword, email })
        .then((user) => {
            console.log(user);
            res.status(201).json({ message: 'User created successfully' });
        })
        .catch((err) => {       
            console.error('Error creating user:', err);
            res.status(500).json({ message: 'Internal server error' });
        });      
        
    } else {
        res.status(400).json({ message: 'Invalid input' });
    }
};

module.exports = {getAuth, postAuth}; 

