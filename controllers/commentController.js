"use strict";
const Models = require("../models");

// add a new comment
const addComment = (data, res) => {
  Models.Comment.create(data)
   .then((data) => {
     res.send({ result: 200, message: "Comment added", data });
   })
   .catch((err) => {
     console.log(err);
     res.send({ result: 500, error: err.message });
   });
};

// get all comments
const getComments = (res) => {
  Models.Comment.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// delete a comment by ID
const deleteComment = (req, res) => {
  Models.Comment.destroy({ where: { id: req.params.id } })
    .then((data) => {
      if (data) {
        res.send({ result: 200, message: "Comment deleted" });
      } else {
        res.send({ result: 404, message: "Comment not found" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getComments,
  addComment,
  deleteComment,
};