const { body } = require('express-validator');

const homeValidator = [
    body('houseName')
        .notEmpty().withMessage('House name is required').bail()
        .isLength({ min: 3 }).withMessage('House name must be at least 3 characters long'),

    body('price')
        .notEmpty().withMessage('Price is required').bail()
        .isNumeric().withMessage('Price must be a number').bail()
        .custom(value => value > 0).withMessage('Price must be greater than 0'),

    body('location')
        .notEmpty().withMessage('Location is required').bail()
        .isLength({ min: 3 }).withMessage('Location must be at least 3 characters long'),

    body('rating')
        .notEmpty().withMessage('Rating is required').bail()
        .isNumeric().withMessage('Rating must be a number').bail()
        .isFloat({ min: 0, max: 5 }).withMessage('Rating must be between 0 and 5'),

    body('description')
        .optional()
        .notEmpty().withMessage('Description is not empty').bail()
        .isLength({ max: 500 }).withMessage('Description must be less than 500 characters long'),
];

module.exports = homeValidator;