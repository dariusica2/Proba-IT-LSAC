const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, registerUser, loginUser, getProfile } = require('../controllers/authController')

router.use(
	cors({
		credentials: true,
		origin: 'http://localhost:5173'
	})
)

router.get('/', test)
router.post('/register', registerUser) // Endpoint for register
router.post('/login', loginUser) // Endpoint for login
router.get('/profile', getProfile) // Endpoint for profile

module.exports = router