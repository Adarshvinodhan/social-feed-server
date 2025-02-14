// models/Comment.js
import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/dbConfig.js'; // Import your sequelize instance

const Comment = sequelize.define('Comment', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users', // Assuming you have a Users table
      key: 'id',
    },
  },
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Posts',
      key: 'id',
    },
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  timestamps: true,
});

export default Comment;
