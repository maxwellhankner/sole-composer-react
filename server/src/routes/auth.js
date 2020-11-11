const router = require('express').Router();
const {
  getSession,
  // google,
  // googleCallback,
  logout,
} = require('../controllers/auth');

router.route('/getsession').get(getSession);

// router.route('/google').get(google);

// router.route('/google/callback').get(googleCallback);

router.route('/logout').get(logout);

module.exports = router;
