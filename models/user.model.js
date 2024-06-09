import mongoose from 'mongoose';
import Task from './task.model.js';

const { Schema } = mongoose;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  tasks: [Task.schema] // Embedding taskSchema within the user schema
});

// Creating User Schema
const User = mongoose.model('User', userSchema, 'user');

// Exporting User SChema Model
export default User;