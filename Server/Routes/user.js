const  express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// create, update, delete
router.get('/', userController.view);



module.exports = router;