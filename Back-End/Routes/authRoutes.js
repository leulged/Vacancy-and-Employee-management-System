const express = require('express');
const { loginUser } = require('../Controllers/authController');

const router = express.Router();

// Route to handle login
router.post('/login', loginUser);

module.exports = router;
