const express = require('express');    
const router = express.Router();
const homeController = require('../controllers/homeController');


router.get('/all-homes', homeController.getAllHomes);
router.post('/add-home', homeController.createHome);
router.put('/edit-home/:id', homeController.editHome);
router.delete('/delete-home/:id', homeController.deleteHome);

module.exports = router;



