import express from "express";
import cors from "cors";
import 'dotenv/config';
import sequelize from "./config/dbConfig.js";
import postRoutes from "./routes/postRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use('/', postRoutes, authRoutes);

sequelize.sync().then(() => {
    console.log('Database synced successfully');
}).catch(error => {
    console.error('Error syncing database:', error);
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});