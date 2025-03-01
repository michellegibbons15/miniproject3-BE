"use strict";
require("dotenv").config();
const { Sequelize } = require("sequelize");

// Initialize Sequelize with environment variables
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
  }
);

// Function to authenticate connection
const connectMysql = async () => {
  try {
    await sequelize.authenticate();
    console.log(`✅ Successful connection to MySQL Database: ${process.env.DB_NAME}`);
  } catch (error) {
    console.error("❌ Unable to connect to MySQL database:", error);
    process.exit(1);
  }
};
connectMysql();

module.exports = {
  Sequelize: sequelize,
 };