const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const postSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  userId: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
module.exports = Posts = mongoose.model("post", postSchema);
