// controllers/postController.js
import Post from '../models/post.js';
import Like from '../models/like.js';
import Comment from '../models/comment.js';

// Create a new post
export const createPost = async (req, res) => {
  const { title, content } = req.body;
  const userId = req.user.id; // The user ID comes from the JWT token

  try {
    const newPost = await Post.create({ title, content, userId });
    return res.status(201).json(newPost);
  } catch (error) {
    return res.status(500).json({ message: 'Error creating post', error });
  }
};

// Get all posts along with likes and comments
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        { model: Like, attributes: ['userId'] },
        { model: Comment, attributes: ['content', 'userId'] },
      ],
    });
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching posts', error });
  }
};

// Get a single post with likes and comments
export const getPost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findOne({
      where: { id },
      include: [
        { model: Like, attributes: ['userId'] },
        { model: Comment, attributes: ['content', 'userId'] },
      ],
    });

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching post', error });
  }
};

// Like a post
export const likePost = async (req, res) => {
    const { postId } = req.params;
    const userId = req.user.id;
  
    try {
      // Check if the user already liked the post
      const existingLike = await Like.findOne({ where: { postId, userId } });
      if (existingLike) {
        return res.status(400).json({ message: 'You already liked this post' });
      }
  
      // Create a new like
      await Like.create({ postId, userId });
  
      // Increment the like count in the Post model
      const post = await Post.findByPk(postId);
      post.likesCount += 1;
      await post.save();
  
      return res.status(200).json({ message: 'Post liked successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Error liking post', error });
    }
  };

  // Add a comment to a post
export const commentOnPost = async (req, res) => {
    const { postId } = req.params;
    const { content } = req.body;
    const userId = req.user.id;
  
    try {
      // Create a new comment
      const comment = await Comment.create({ postId, userId, content });
  
      // Increment the comment count in the Post model
      const post = await Post.findByPk(postId);
      post.commentsCount += 1;
      await post.save();
  
      return res.status(201).json(comment);
    } catch (error) {
      return res.status(500).json({ message: 'Error adding comment', error });
    }
  };
