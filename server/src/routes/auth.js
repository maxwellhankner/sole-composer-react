const router = require('express').Router();
const { getSession, logout } = require('../controllers/auth');
// const express = require('express');
// const router = express.Router();

router.route('/getsession').get(getSession);

// router.route('/google').get(google);

// router.route('/google/callback').get(googleCallback);

router.route('/logout').get(logout);

module.exports = router;
