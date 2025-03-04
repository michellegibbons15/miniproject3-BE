"use strict";
const Models = require("../models");

// create a new post
const createPost = (data, res) => {
  Models.Post.create(data)
    .then((data) => {
      res.send({ result: 201, message: "Post created", data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// get all posts
const getAllPosts = (res) => {
  Models.Post.findAll({
    include: [{ model: Models.Comment, as: 'comments'  }], // Include associated comments
    order: [["createdAt", "DESC"]], // Optional: Order posts by newest first
  })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// update a post by ID
const updatePost = (req, res) => {
  Models.Post.update(req.body, { where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// delete a post by ID
const deletePost = (req, res) => {
  Models.Post.destroy({ where: { id: req.params.id } })
    .then((data) => {
      if (data) {
        res.send({ result: 200, message: "Post deleted" });
      } else {
        res.send({ result: 404, message: "Post not found" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
};