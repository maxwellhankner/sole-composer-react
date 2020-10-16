const Featured = require('../models/featured');

// Get featured
// GET /api/featured/
exports.getFeatured = async (req, res, next) => {
  try {
    const featured = await Featured.find().populate('Outline');

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
