const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const Comment = require("../models/comment.model");
const Class = require("../models/class.model");
const mongoose = require('mongoose');

// POST '/api/comments'    => to post a new comment to a class 
router.post("/comments", (req, res, next) => {
    const { commentBody, classId } = req.body;
    const author = req.session.currentUser;
    Comment.create({ commentBody, classId, author })
      .then((createdComment) => {
        Class.findByIdAndUpdate (classId, { $push: { comments: createdComment._id } })
        .then((theResponse)=>{
            res.status(201).json(theResponse);
        })
      })
      .catch((err) => {
        res
          .status(500) // internal server error
          .json(err);
      });
  });

// GET '/api/comments/:commentId'    => Show a comment and all its replies
router.get("/comments/:commentId", (req, res, next) => {
    const { commentId } = req.params;
    if ( !mongoose.Types.ObjectId.isValid(commentId)) {
        res
          .status(400)  //  Bad Request
          .json({ message: 'Specified commentId is not valid'})
        return;
      }
      Comment
        .findById( commentId )
        .populate('replies')
        .then((foundComment) => {
            res.status(200).json(foundComment);  // OK
        })
        .catch((err) => {
            res.status(500).json(err);		// Internal Server Error
        })

})

// DELETE '/api/comments/:commentId
router.delete("/comments/:commentId", (req, res, next) => {
    const { commentId } = req.params;
    if ( !mongoose.Types.ObjectId.isValid(commentId) ) {
        res
          .status(400)
          .json({ message: 'Specified id is not valid'});
        return;
      }
    Comment
        .findByIdAndRemove(commentId)
        .then(() => {
        res
          .status(202)
          .send(`Comment ${commentId} was removed successfully.`);
        })
        .catch(err => {
            res.json(err);
        })
})

// PUT '/api/comments/:commentId'    => to update a specific comment
router.put('/comments/:commentId', (req, res) => {
    const { commentId } = req.params;
    const { commentBody } = req.body;
    
    if ( !mongoose.Types.ObjectId.isValid(commentId) ) {
      res.status(400).json({ message: 'Specified commentId is not valid' });
      return;
    }
  
    Comment.findByIdAndUpdate( commentId, { commentBody })
      .then(() => {
        res
          .status(201)
          .send();
      })
      .catch(err => {
        res.status(500).json(err);
      })
  });

module.exports = router;