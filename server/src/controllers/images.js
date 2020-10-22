const request = require('request');

// Get Image
// GET /api/assets/images/:id
exports.getImage = async (req, res, next) => {
  try {
    request
      .get(
        `https://solecomposertesting.s3.us-east-2.amazonaws.com/${req.params.id}`
      )
      .pipe(res);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
