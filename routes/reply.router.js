const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const Reply = require("../models/reply.model");
const Comment = require("../models/comment.model");
const mongoose = require('mongoose');

// POST '/api/replies'    => to post new a reply to a comment 
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




module.exports = router;