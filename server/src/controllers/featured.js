const Featured = require('../models/featured');

// Get featured
// GET /api/featured/
exports.getFeatured = async (req, res, next) => {
  try {
    const featured = await Featured.findById(
      '5f8b79d8dc97b93fb8fbe17c'
    ).populate({
      path: 'featured',
      model: 'Outline',
      select: ['_id', 'author', 'title', 'screenshot', 'configId'],
      populate: {
        path: 'configId',
        model: 'Config',
        select: 'modelName',
      },
    });

    if (!featured) {
      return res.status(400).json({ error: 'No featured designs found' });
    }

    return res.status(200).json(featured);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Add featured
// POST /api/featured/
exports.addFeatured = async (req, res, next) => {
  try {
    const featured = await Featured.create(req.body);

    return res.status(200).json(featured);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
