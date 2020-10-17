const router = require('express').Router();
const { getFeatured, addFeatured } = require('../controllers/featured');

router.route('/').post(addFeatured);

router.route('/').get(getFeatured);

module.exports = router;
