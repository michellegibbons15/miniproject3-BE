const express = require("express");
const userRouter = express.Router();
const Controllers = require("../controllers/userController");

// get users
// http://localhost:8081/api/users
userRouter.get("/", (req, res) => {Controllers.getUsers(res);});

// create user
// http://localhost:8081/api/users/create
userRouter.post("/create", (req, res) => {Controllers.createUser(req.body, res);});

// update user
// http://localhost:8081/api/users/:id
userRouter.put("/:id", (req, res) => {Controllers.updateUser(req, res);});

// delete user
// http://localhost:8081/api/users/:id
userRouter.delete("/:id", (req, res) => {Controllers.deleteUser(req, res);});

module.exports = userRouter;