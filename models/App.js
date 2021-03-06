var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var AppSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  isFeatured: {
    type: Boolean,
    required: true
  },
  isCollaboration: {
    type: Boolean,
    required: true
  },
  deployedLink: {
    type: String,
  },
  githubLink: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  keywords: {
    type: Array,
    required: true
  },
  imagePath: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  publishDate: {
    type: Date,
    required: true
  }
});

// Create model using defined schema
var App = mongoose.model("App", AppSchema);

module.exports = App;
