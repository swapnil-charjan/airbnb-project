const { body } = require('express-validator');

const userValidator = [
    body('username')
        .notEmpty().withMessage('Username is required!').bail()
        .isLength({ min: 5 }).withMessage('Username must be at least 5 characters long!'),

    body('password')
        .notEmpty().withMessage('Password is required!').bail()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/)
        .withMessage('Enter a strong password').bail()
        .isLength({ min: 5 }).withMessage('Password must be at least 5 characters long!'),

    body('confirmPassword')
        .notEmpty().withMessage('Confirm password is required!').bail()
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Password do not match!');
            }
            return true;
        }),

    body('email')
        .notEmpty().withMessage('Email is required!').bail()
        .custom((value, { req }) => {
            if (value === req.body.email) {
                throw new Error('Entered email is already used!');
            }
            return true;
        })
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).withMessage('Enter a valid email address!'),
];

module.exports = userValidator;