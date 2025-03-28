import express from 'express';
import { register, login } from '../controllers/authControllers.js';

const router = express.Router();

// Route for registering a new user
router.post('/register', register);

// Route for logging in
router.post('/login', login);

export default router;
