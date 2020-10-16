const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const outlineSchema = new Schema({
  outline: Schema.Types.Mixed,
});

const Outline = mongoose.model('Outline', outlineSchema);

module.exports = Outline;
