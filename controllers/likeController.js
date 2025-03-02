"use strict";
const Models = require("../models")

// get all likes
const getAllLikes = (res) =>{
  Models.Like.findAll({})
    .then((data) => {
      res.send({result: 20, data:data});
    })
    .catch((err) => {
      console.log(err);
      res.send({result: 500, error: err.message});
    });
};

// Like a post by postId
const likePost = (req, res) => {
  const {userId, postId} = req.body
  
  Models.Like.create({userId, postId})
    .then((data) => {
      res.send({ result: 201, message: "Post liked", data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Unlike a post by postId
const unlikePost = (req, res) => {
  const {userId, postId} = req.body

  Models.Like.destroy({where: {userId, postId}})
    .then((data) => {
      if (data) {
        res.send({ result: 200, message: "Post unliked" });
      // } else {
      //   res.send({ result: 404, message: "Like not found" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getAllLikes,
  likePost,
  unlikePost,
}