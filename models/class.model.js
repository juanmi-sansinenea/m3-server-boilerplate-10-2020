const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
    classType: {type: String, required: true, enum: ["HIIT", "Strength", "Dance", "Yoga", "Pilates", "Spinning"], required: true},
    instructor: {type: Schema.Types.ObjectId, ref: "User", required: true},
    scheduled: {type: Date, required: true},
    duration: {type: Number, required: true},
    targetedMessage: {
      user: {type: String},
      message: {type: String}
    },
    comments: [{type: Schema.Types.ObjectId, ref: "Comment"}],
  }, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});


const Class = mongoose.model('Class', classSchema);

module.exports = Class;