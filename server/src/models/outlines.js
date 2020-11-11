const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const outlineSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  title: String,
  screenshot: String,
  configId: { type: Schema.Types.ObjectId, ref: 'Config' },
  outlineData: Schema.Types.Mixed,
});

const Outline = mongoose.model('Outline', outlineSchema);

module.exports = Outline;
