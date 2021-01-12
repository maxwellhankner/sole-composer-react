// const axios = require('axios');
const request = require('request');

// Get model
// GET /api/models/af1
exports.getModel = async (req, res, next) => {
  try {
    request
      .get(
        `https://sole-composer-design-assets.s3.us-east-2.amazonaws.com/${req.params.id}`
      )
      .pipe(res);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
