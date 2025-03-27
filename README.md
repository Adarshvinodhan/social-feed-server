# Social Media Feed - Backend

Live:https://socialmediafeed-mern.netlify.app/

A backend API for a social media feed built using Node.js and Express.

## Features
- **User Authentication**: JWT-based authentication.
- **Post Management**: Create, read, update, and delete posts.
- **Like & Comment System**: Users can like and comment on posts.
- **User Profiles**: Store and manage user details.
- **Secure API**: Implements authentication and validation.
- **Database Integration**: Supports MongoDB.

## Tech Stack
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **MongoDB** - Database for storing user and post data
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication using JSON Web Tokens
- **bcrypt** - Password hashing
- **dotenv** - Environment variable management
- **Multer** - File uploads
- **Cors** - Cross-Origin Resource Sharing

## Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/social-media-feed-backend.git
   cd social-media-feed-backend
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Set up environment variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
4. **Run the server**
   ```sh
   npm start
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - User login

### Posts
- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create a new post
- `GET /api/posts/:id` - Get a single post
- `PUT /api/posts/:id` - Update a post
- `DELETE /api/posts/:id` - Delete a post

### Likes & Comments
- `POST /api/posts/:id/like` - Like a post
- `POST /api/posts/:id/comment` - Comment on a post

## Project Structure
```
/social-media-feed-backend
│── src/
│   ├── controllers/     # Business logic for routes
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API endpoints
│   ├── middleware/      # Authentication & validation
│   ├── config/          # Configuration files
│   ├── app.js           # Express application setup
│── .env                 # Environment variables
│── package.json         # Project dependencies
│── README.md            # Project documentation
```

## Customization
- Modify routes and middleware as per project requirements.
- Configure additional security features (rate limiting, helmet, etc.).


Happy coding! 🚀

