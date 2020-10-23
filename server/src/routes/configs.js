const router = require('express').Router();
const { getConfig, addConfig } = require('../controllers/configs');

router.route('/').post(addConfig);

router.route('/:id').get(getConfig);

module.exports = router;
