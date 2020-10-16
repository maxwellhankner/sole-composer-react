const router = require('express').Router();
const { getOutline, addOutline } = require('../controllers/outlines');

router.route('/').post(addOutline);

router.route('/:id').get(getOutline);

module.exports = router;
