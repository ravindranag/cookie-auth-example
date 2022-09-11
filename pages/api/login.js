import * as jwt from 'jsonwebtoken'

const jwt_secret = process.env.JWT_SECRET

export default async function handler(req, res, next) {
	const { user } = req.body
	// console.log('user', user)
	const token = jwt.sign({
		username: user.username,
		createdAt: (new Date()).toISOString()
	}, jwt_secret, {
		algorithm: 'HS256'
	})
	// console.log({token})
	return new Promise((resolve, reject) => {
		res.status(200).json({
			message: 'signed in successfully',
			username: user.username,
			token
		})
		resolve()
	})
}
