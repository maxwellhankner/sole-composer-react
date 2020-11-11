const User = require('../models/user');
// const passport = require('passport');
const passport = require('../middleware/googleAuth');

exports.getSession = async (req, res, next) => {
  console.log('hey');
  if (req.session.passport) {
    const user = await User.findById(req.session.passport.user);
    if (user) {
      console.log(user);
      return res.status(200).json(user);
    }
    return res.status(401).json({ err: 'No user found' });
  }
  return res.status(200).json({ err: 'No Session' });
};

exports.google = (req, res, next) => {
  console.log('1');
  passport.authenticate('google', { scope: ['profile', 'email'] });
};

exports.googleCallback = (req, res, next) => {
  console.log('2');
  passport.authenticate('google', {
    successRedirect: 'http://localhost:3000/',
    failureRedirect: '/auth/login/failed',
  });
};

exports.logout = (req, res, next) => {
  req.logout();
  req.session = null;
  res.redirect('http://localhost:3000/');
};
