const router = require('express').Router();
const {
  getOutline,
  addOutline,
  getMyDesigns,
} = require('../controllers/outlines');

router.route('/').post(addOutline);

router.route('/mydesigns').get(getMyDesigns);

router.route('/:id').get(getOutline);

module.exports = router;
