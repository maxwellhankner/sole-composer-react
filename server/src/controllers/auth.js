const User = require('../models/user');
// const passport = require('passport');
const passport = require('../middleware/googleAuth');
const production = process.env.NODE_ENV === 'production';
const redirectUrl = production
	? process.env.URL
	: `http://localhost:${process.env.PORT}/`;

exports.getSession = async (req, res, next) => {
	if (req.session.passport) {
		const user = await User.findById(req.session.passport.user);
		if (user) {
			return res.status(200).json(user);
		}
		return res.status(401).json({ err: 'No user found' });
	}
	return res.status(200).json({ err: 'No Session' });
};

exports.google = (req, res, next) => {
	passport.authenticate('google', { scope: ['profile', 'email'] });
};

exports.googleCallback = (req, res, next) => {
	passport.authenticate('google', {
		successRedirect: redirectUrl,
		failureRedirect: '/auth/login/failed',
	});
};

exports.logout = (req, res, next) => {
	req.logout();
	req.session = null;
	res.redirect(redirectUrl);
};
