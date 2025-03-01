const express = require("express");
const Controllers = require("../controllers/likeController")
const likeRouter = express.Router();

// get likes
//
likeRouter.get("/", (req, res) => {Controllers.getAllLikes(res)});

//get likes by post
//
likeRouter.get("/:postId", (req, res) => {Controllers.getLikesByPost(res)});

// like a post
//
likeRouter.post("/",(req, res) => {Controllers.likePost(req, res)})

// unlike a post
//
likeRouter.delete("/",(req, res) => {Controllers.unlikePost(req, res)})

module.exports = likeRouter;