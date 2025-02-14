// models/Like.js
import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/dbConfig.js'; // Import your sequelize instance

const Like = sequelize.define('Like', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
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
}, {
  timestamps: true,
});

export default Like;
