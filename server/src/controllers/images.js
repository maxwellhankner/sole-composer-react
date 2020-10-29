const request = require('request');

const upload = require('../middleware/imageUpload');
const singleUpload = upload.single('image');

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

// Post Image
// POST /api/assets/uploadimage/
exports.uploadImage = (req, res, next) => {
  try {
    singleUpload(req, res, function (error) {
      if (error) {
        throw error;
      }
      const image = req.file.location;
      return res.status(200).json({ image: image });
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
