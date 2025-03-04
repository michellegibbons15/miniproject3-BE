"use strict";
const Comment = require("./Comment");
const Like = require("./Like");
const Post = require("./Post");
const User = require("./User");
const Event = require("./Event");

async function init() {
  await User.sync();
  await Post.sync();
  await Comment.sync();
  await Like.sync();
  await Event.sync();

  Post.associate({ Comment });
  Comment.associate({ Post });
};
init();
module.exports = {
  User,
  Post,
  Comment,
  Like,
  Event
}