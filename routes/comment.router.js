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


  
module.exports = router;