import dotenv from 'dotenv';
import express from 'express';
import { json } from 'express';
import cors from "cors";
import userRoutes from './routes/user.route.js';
import taskRoutes from './routes/task.route.js';
import authRoutes from './routes/auth.route.js';
import connect from './connection.js';

// Loading environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3069;
// Connecting to MongoDB
connect();

app.use(json());
app.use(cors());
// Routes
app.use('/api/user', userRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/task', taskRoutes);

app.get('*', (req, res) => {
  res.send('Hello');
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
