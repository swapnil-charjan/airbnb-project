const getAuth = (req, res, next) => {
    res.status(200).json({ message: 'Authentication successful' });
};

const postAuth = (req, res, next) => {
    const { username, password, confirmPassword, email } = req.body;
    if (username && password && confirmPassword && email) {
        res.status(201).json({ message: 'User created successfully' });
    } else {
        res.status(400).json({ message: 'Invalid input' });
    }
};

module.exports = {getAuth, postAuth}; 

