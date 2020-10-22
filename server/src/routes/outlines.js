const router = require('express').Router();
const {
  getOutline,
  addOutline,
  getMyDesigns,
  updateOutline,
  deleteOutline,
} = require('../controllers/outlines');

router.route('/').post(addOutline);

router.route('/mydesigns').get(getMyDesigns);

router.route('/:id').get(getOutline);

router.route('/:id').put(updateOutline);

router.route('/:id').delete(deleteOutline);

module.exports = router;
