const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'This post requires a title'],
  },
  content: {
    type: String,
    required: [true, 'Please write some content'],
  },
});
const Post = mongoose.model('Post', postSchema);
module.exports = Post;
