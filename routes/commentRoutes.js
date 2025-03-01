const express = require("express");
const Controllers = require("../controllers/commentController")
const commentRouter = express.Router();

// gets all comments
// http://localhost:8081/api/comments
commentRouter.get("/",(req, res) => {Controllers.getComments(res)});

// create new comment
// http://localhost:8081/api/comments/create
commentRouter.post("/create",(req, res) => {Controllers.addComment(req.body, res)});


// delete comment
// http://localhost:8081/api/comments/:id
commentRouter.delete("/:id",(req, res) => {Controllers.deleteComment(req, res)});

module.exports = commentRouter;