const Outline = require('../models/outlines');
const Config = require('../models/configs');

// Get design
// GET /api/outlines/:id
exports.getOutline = async (req, res, next) => {
  try {
    const outline = await Outline.findById(req.params.id);
    if (!outline) {
      return res.status(400).json({ error: 'No design outline found' });
    }
    const config = await Config.findById('5f8926b2fe29a71d3ce1ef60');
    const design = {
      outline: outline.outline,
      config: config.config,
    };
    return res.status(200).json(design);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Add design
// POST /api/outlines/
exports.addOutline = async (req, res, next) => {
  try {
    const outline = await Outline.create(req.body);
    return res.status(200).json(outline);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Get my designs
// GET /api/outlines/mydesigns
exports.getMyDesigns = async (req, res, next) => {
  try {
    const outlines = await Outline.find();
    if (!outlines) {
      return res.status(400).json({ error: 'No design outlines found' });
    }
    return res.status(200).json(outlines);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
