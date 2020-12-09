const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    author: {type: Schema.Types.ObjectId, ref: "User", required: true}, // <-- it's probably a good idea to store req.session.currentUser as the autor
    commentBody: {type: String, required: true},
    replies: [{type: Schema.Types.ObjectId, ref: "Reply"}],
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
  });


const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;