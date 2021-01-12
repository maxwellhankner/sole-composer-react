const router = require('express').Router();
const { getModel } = require('../controllers/models');
const {
  getImage,
  getDesignImage,
  uploadImage,
} = require('../controllers/images');

router.route('/models/:id').get(getModel);

router.route('/images/:id').get(getImage);

router.route('/designimages/:id').get(getDesignImage);

router.route('/uploadimage').post(uploadImage);

module.exports = router;
