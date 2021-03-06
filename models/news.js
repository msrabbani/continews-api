const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: [String],
  urlImage: String,
  author: { type: String, required: true },
  createdAt: Date,
  updatedAt: Date,
});

const News = mongoose.model('News', newsSchema);
module.exports = News;
