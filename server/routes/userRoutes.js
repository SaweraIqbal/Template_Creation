const express = require('express');
const router = express.Router();
const { registerUser, authUser,  updateProfilePic } = require('../controllers/userController');
const validateToken = require('../middleware/validateTokenHandler');

// Routes
router.post('/register', registerUser);
router.post('/login', authUser);
router.put('/:id/pic', updateProfilePic);


module.exports = router;
