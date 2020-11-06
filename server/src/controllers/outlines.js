const Outline = require('../models/outlines');
const Config = require('../models/configs');

// Get my designs
// GET /api/outlines/getalldesigns
exports.getAllDesigns = async (req, res, next) => {
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

// Get new design
// GET /api/outlines/newdesign
exports.newOutline = async (req, res, next) => {
  try {
    const outline = await Outline.findById('5fa4a692621b8c5620b39d4b');
    if (!outline) {
      return res.status(400).json({ error: 'No design outline found' });
    }
    const config = await Config.findById('5f925589cc6d6c16e44d5dfd');

    const design = {
      _id: outline._id,
      author: outline.author,
      title: outline.title,
      modelName: config.modelName,
      screenshot: outline.screenshot,
      outlineData: outline.outlineData,
      configData: config.configData,
    };

    return res.status(200).json(design);
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
    const config = await Config.findById('5f925589cc6d6c16e44d5dfd');

    const design = {
      _id: outline._id,
      author: outline.author,
      title: outline.title,
      modelName: config.modelName,
      screenshot: outline.screenshot,
      outlineData: outline.outlineData,
      configData: config.configData,
    };

    return res.status(200).json(design);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Add outline
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
      req.body,
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
