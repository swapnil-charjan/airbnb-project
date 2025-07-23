const express = require('express');    
const router = express.Router();
const homeController = require('../controllers/homeController');
const homeValidator = require('../validators/homeValidator');
const homeValidate = require('../controllers/homeValidate');


router.get('/all-homes', homeController.getAllHomes);
router.post('/add-home', homeValidator, homeValidate, homeController.createHome);
router.put('/edit-home/:id', homeValidator, homeValidate, homeController.updateHome);
router.delete('/delete-home/:id', homeController.deleteHome);

module.exports = router;



