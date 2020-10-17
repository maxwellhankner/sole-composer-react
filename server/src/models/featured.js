const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const featuredSchema = new Schema({
  featured: [{ type: Schema.Types.ObjectId, ref: 'Outline' }],
});

const Feature = mongoose.model('Feature', featuredSchema);

module.exports = Feature;
