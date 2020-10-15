// All your design logic goes here
const design = require('../models/designs');

exports.oneDesign = async (req, res, next) => {
	try {
		// Fetch model from database
		// const model = db.get.whatever;

		// Fetch configuration
		// const config = db.get.config

		// Format your data however you like
		// const design = {...model, ...config}

		// Return the data
		res.status(200).json(design);
	} catch (error) {
		// If there is any error, return code 400 and a message
		res.status(400).json({ error: error.message });
	}
};
