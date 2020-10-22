const Outline = require('../models/outlines');
const Config = require('../models/configs');

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
      id: outline._id,
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

// Update outline
// UPDATE /api/outlines/:id
exports.updateOutline = async (req, res, next) => {
  try {
    const outline = await Outline.findOneAndUpdate(
      { _id: req.params.id },
      { outline: req.body.outline },
      { new: true }
    );
    if (!outline) {
      return res.status(400).json({ error: 'Design could not be updated' });
    }
    return res.status(200).json(outline);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Delete outline
// DELETE /api/outlines/:id
exports.deleteOutline = async (req, res, next) => {
  try {
    const outline = await Outline.findOneAndDelete({ _id: req.params.id });
    if (!outline) {
      return res.status(400).json({ error: 'Design could not be deleted' });
    }
    return res.status(200).json(outline);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
