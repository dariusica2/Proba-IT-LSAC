const User = require('../models/user')
const { hashPassword, comparePassword } = require('../utils/auth')
const jwt = require('jsonwebtoken');

const test = (req, res) => {
	res.json('Test is working!')
}

// Register endpoint
const registerUser = async (req, res) => {
	try {
		const {name, telephone, email, password} = req.body;
		// Name check
		if (!name) {
			return res.json({
				error: 'Hopa! Ai uitat numele.'
			})
		}

		// Phone check
		if (!telephone) {
			return res.json({
				error: 'Hopa! Ai uitat telefonu.'
			})
		}

		const telephoneExist = await User.findOne({telephone})

		if (telephoneExist) {
			return res.json({
				error: 'Cont cu telefonu ăsta există deja.'
			})
		}

		// Mail check
		if (!email) {
			return res.json({
				error: 'Hopa! Ai uitat emailu.'
			})
		}

		const mailExist = await User.findOne({email})

		if (mailExist) {
			return res.json({
				error: 'Cont cu mailu ăsta există deja.'
			})
		}

		// Password check
		if (!password) {
			return res.json({
				error: 'Hopa! Ai uitat parola.'
			})
		}

		if (password.length < 6) {
			return res.json({
				error: 'Cam scurtuță parola vericule...'
			})
		}

		const hashedPassword = await hashPassword(password)

		const user = await User.create({
			name,
			telephone,
			email,
			password: hashedPassword
		})

		return res.json(user)
	} catch (error) {
		console.log(error);
	}
}

// Login endpoint
const loginUser = async (req, res) => {
	try {
		const {email, password} = req.body;

		// User check
		const user = await User.findOne({email});
		if (!user) {
			return res.json({
				error: 'Sigur ai pus mailu bine?'
			})
		}

		// Password check
		const match = await comparePassword(password, user.password)

		if (!match) {
			return res.json({
				error: 'Parolă greșită :('
			})
		} else {
			jwt.sign({id: user._id, name: user.name, email: user.email, telephone: user.telephone}, process.env.JWT_SECRET, {}, (err, token) => {
				if (err) {
					throw err;
				}
				res.cookie('token', token).json(user)
			})
		}
	} catch (error) {
		console.log(error);
	}
}

const getProfile = (req, res) => {
	const {token} = req.cookies
	
	if (token) {
		jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
			if (err) {
				throw err;
			}
			res.json(user)
		})
	} else {
		res.json(null)
	}
}

module.exports = {
	test,
	registerUser,
	loginUser,
	getProfile
}