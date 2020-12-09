const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const replySchema = new Schema({
    //comment: {type: Schema.Types.ObjectId, ref: "Comment", required: true}, // <-- not needed, since each reply is listed in a replies array, in Comments
    author: {type: Schema.Types.ObjectId, ref: "User", required: true}, // <-- it's probably a good idea to store req.session.currentUser as the autor
    body: {type: String, rquired: true},
    replies: [{type: Schema.Types.ObjectId, ref: "Reply"}]
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
});


const Reply = mongoose.model('Reply', replySchema);

module.exports = Reply;