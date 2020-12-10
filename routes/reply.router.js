const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const Reply = require("../models/reply.model");
const Comment = require("../models/comment.model");
const mongoose = require('mongoose');

// POST '/api/replies'    => to post a new reply to a comment 
router.post("/replies", (req, res, next) => {
    const { replyBody, commentId } = req.body;
    const author = req.session.currentUser;
    Reply.create({ replyBody, commentId, author })
      .then((createdReply) => {
        Comment.findByIdAndUpdate (commentId, { $push: { replies: createdReply._id } })
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

// POST '/api/replies/replies'    => to post a new reply to another reply 
router.post("/replies/replies", (req, res, next) => {
    const { replyBody, parentReplyId } = req.body;
    const author = req.session.currentUser;
    Reply.create({ replyBody, parentReplyId, author })
      .then((createdReply) => {
        Reply.findByIdAndUpdate (parentReplyId, { $push: { replies: createdReply._id } })
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

// GET '/api/replies/:replyId'    => Show a reply and all its replies
router.get("/replies/:replyId", (req, res, next) => {
    const { replyId } = req.params;
    if ( !mongoose.Types.ObjectId.isValid(replyId)) {
        res
          .status(400)  //  Bad Request
          .json({ message: 'Specified replyId is not valid'})
        return;
      }
      Reply
        .findById( replyId )
        .populate('replies')
        .then((foundReply) => {
            res.status(200).json(foundReply);  // OK
        })
        .catch((err) => {
            res.status(500).json(err);		// Internal Server Error
        })

})

// DELETE '/api/replies/:replyId'    => to kill a specific reply
router.delete('/replies/:replyId', (req, res) => {
    const { replyId } = req.params;
    
    if ( !mongoose.Types.ObjectId.isValid(replyId) ) {
      res.status(400).json({ message: 'Specified replyId is not valid' });
      return;
    }
  
    Reply.findByIdAndRemove( replyId )
      .then(() => {
        res
          .status(202)
          .send(`Reply ${replyId} was removed successfully.`);
      })
      .catch(err => {
        res.status(500).json(err);
      })
  });

// PUT '/api/replies/:replyId'    => to update a specific reply
router.put('/replies/:replyId', (req, res) => {
    const { replyId } = req.params;
    const { replyBody } = req.body;
    
    if ( !mongoose.Types.ObjectId.isValid(replyId) ) {
      res.status(400).json({ message: 'Specified replyId is not valid' });
      return;
    }
  
    Reply.findByIdAndUpdate( replyId, { replyBody })
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