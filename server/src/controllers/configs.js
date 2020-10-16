const Config = require('../models/configs');

// Get config
// GET /api/configs/:id
exports.getConfig = async (req, res, next) => {
  try {
    const config = await Config.findById(req.params.id);

    if (!config) {
      return res.status(400).json({ error: 'No design config found' });
    }

    return res.status(200).json(config);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Add config
// POST /api/configs/
exports.addConfig = async (req, res, next) => {
  try {
    // const { data } = req.body;

    const config = await Config.create(req.body);

    return res.status(200).json(config);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
