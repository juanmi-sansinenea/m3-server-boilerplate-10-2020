const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const Class = require("../models/class.model");
const mongoose = require('mongoose');

// GET '/api/classes'		 => to get all classes
router.get("/classes", (req, res, next) => {
    Class.find()
    //.populate(["comments"])
      .then((allClasses) => {
        res
          .status(200) // ok
          .json(allClasses);
      })
      .catch((err) => {
        res
          .status(500) // internal server error
          .json(err);
      });
});

// POST '/api/classes'    => to post a new class !! To be able te create classes manually on Postman
router.post("/classes", (req, res, next) => {
    const { classType, instructor, scheduled, duration, comments } = req.body;
    Class.create({ classType, instructor, scheduled, duration, comments: [] })
      .then((createdClass) => {
        res
          .status(201) // created
          .json(createdClass);
      })
      .catch((err) => {
        res
          .status(500) // internal server error
          .json(err);
      });
  });

//GET '/api/classes/:classId'		 => to get a specific classes by Id
router.get("/classes/:classId", (req, res) => {
    const { classId } = req.params;
    if ( !mongoose.Types.ObjectId.isValid(classId)) {
      res
        .status(400)  //  Bad Request
        .json({ message: 'Specified classId is not valid'})
      return;
    }
  
    Class
      .findById( classId )
      .populate('comments')
      .then( (foundClass) => {
        res.status(200).json(foundClass);  // OK
      })
      .catch((err) => {
        res.status(500).json(err);		// Internal Server Error
      })
  
  });
  
module.exports = router;