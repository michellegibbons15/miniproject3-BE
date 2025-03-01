const express = require("express");
const Controllers = require("../controllers/postController")
const postRouter = express.Router();

// get posts
// http://localhost:8081/api/posts
postRouter.get("/", (req, res) => {Controllers.getAllPosts(res)});

// create post
// http://localhost:8081/api/posts/create
postRouter.post("/create", (req, res) => {Controllers.createPost(req.body, res)});

// update post
// http://localhost:8081/api/posts/:id
postRouter.put("/:id", (req, res) => {Controllers.updatePost(req, res);});

// delete post
// http://localhost:8081/api/posts/:id
postRouter.delete("/:id", (req, res) => {Controllers.deletePost(req, res);});

module.exports = postRouter;