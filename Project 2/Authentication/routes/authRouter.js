const express = require("express");
const router = express.Router();
const { getAuth, postAuth } = require("../controllers/authController"); 
const userValidator = require("../validators/authValidator");
const validate = require("../middleware/authMiddleware");

router.get('/auth', getAuth)
router.post('/auth', userValidator, validate, postAuth)

module.exports = router;