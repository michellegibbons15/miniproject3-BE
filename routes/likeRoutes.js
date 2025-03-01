const express = require("express");
const Controllers = require("../controllers/likeController")
const likeRouter = express.Router();

// get likes
// http://localhost:8081/api/likes
likeRouter.get("/", (req, res) => {Controllers.getAllLikes(res)});

// like a post
// http://localhost:8081/api/likes
likeRouter.post("/",(req, res) => {Controllers.likePost(req, res)})

// unlike a post
// http://localhost:8081/api/likes
likeRouter.delete("/",(req, res) => {Controllers.unlikePost(req, res)})

module.exports = likeRouter;