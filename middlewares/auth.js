import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET; // Replace with your actual secret key

// Middleware to authenticate user based on JWT token
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Assuming Bearer token

  if (!token) {
    return res.status(401).json({ message: 'Token is required' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
    req.user = user; // Store user information in request object
    next();
  });
};

export default authenticateToken;
