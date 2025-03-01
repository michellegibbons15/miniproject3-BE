const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Post extends Model {}

Post.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      required: true,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true, // Allowing null if imageUrl is optional
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "posts",
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Post;