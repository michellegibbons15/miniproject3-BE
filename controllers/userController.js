"use strict";
const Models = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "dog";

// get all users
const getUsers = (res) => {
  Models.User.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
// create users
const createUser = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await Models.User.create({
      name,
      username,
      email,
      password: hashedPassword,
    });
    res.status(201).send({ result: 200, data: newUser });
  } catch (err) {
    console.error(err);
    res.status(500).send({ result: 500, error: err.message });
  }
};

// User Login
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user by username
    const user = await Models.User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).send({ result: 401, error: "User not found" });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send({ result: 401, error: "Invalid password" });
    }

    // Generate JWT Token
    const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: "1h" });

    res.send({ result: 200, message: "Login successful", token });
  } catch (err) {
    console.error(err);
    res.status(500).send({ result: 500, error: err.message });
  }
};

// update user by ID
const updateUser = (req, res) => {
  Models.User.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
// delete user by ID
const deleteUser = (req, res) => {
  Models.User.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
module.exports = {
  getUsers,
  createUser,
  loginUser,
  updateUser,
  deleteUser,
};
