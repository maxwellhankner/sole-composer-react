// Handle all of your /designs routes
const express = require('express');
const DesignController = require('../controllers/designs');

const router = express.Router();

/*
Ex: api/design/featured will run the DesignController.featured function

router.get('/featured', DesignController.getFeatured);
router.post('/featured', DesignController.addFeatured);
*/

router.get('/', DesignController.oneDesign);

module.exports = router;
