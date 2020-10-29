const router = require('express').Router();
const { getModel } = require('../controllers/models');
const { getImage, uploadImage } = require('../controllers/images');

router.route('/models/af1').get(getModel);

router.route('/images/:id').get(getImage);

router.route('/uploadimage').post(uploadImage);

module.exports = router;
