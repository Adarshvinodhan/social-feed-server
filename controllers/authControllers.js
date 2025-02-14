import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js'; 

const JWT_SECRET = process.env.JWT_SECRET; 

// Registration function
export const register = async (req, res) => {
  const { name, email, password } = req.body;

  // Check if user already exists
  const userExists = await User.findOne({ where: { email } });
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // Create new user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Create JWT token
    const token = jwt.sign({ username: newUser.name, id: newUser.id }, JWT_SECRET, {
      expiresIn: '1h', // Token expiration time (1 hour in this case)
    });

    // Send response with token
    return res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Error registering user', error });
  }
};

// Login function
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare password with hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create JWT token
    const token = jwt.sign({ username: user.name, id: user.id }, JWT_SECRET, {
      expiresIn: '1h',
    });

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Error logging in', error });
  }
};
