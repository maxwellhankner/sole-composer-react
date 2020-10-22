// const axios = require('axios');
const request = require('request');

// Get model
// GET /api/models/af1
exports.getModel = async (req, res, next) => {
  try {
    request
      .get('https://solecomposertesting.s3.us-east-2.amazonaws.com/af1_ao.gltf')
      .pipe(res);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
