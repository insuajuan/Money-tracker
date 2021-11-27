const router = require('express').Router();
const userControllers = require('../controllers/user');

// Register
router.post('/register', userControllers.register);

// Login
router.post('/login', userControllers.login)

module.exports = router;