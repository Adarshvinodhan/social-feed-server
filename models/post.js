import { DataTypes } from 'sequelize';
import sequelize from '../config/dbConfig.js';
import Like from './like.js'; 
import Comment from './comment.js'; 

const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id',
    },
  },
  likesCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  commentsCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  }
}, {
  timestamps: true, 
});


Post.hasMany(Like, {
  foreignKey: 'postId',
  onDelete: 'CASCADE',
});


Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE',
});

export default Post;
