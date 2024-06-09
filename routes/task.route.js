import express from 'express';
import { createTask, getTask, getTasks, updateTask, deleteTask } from '../controllers/task.controller.js';

const router = express.Router();

//create a new task
router.post('/', createTask);

// Get all tasks
router.get('/:userId', getTasks);

// Get a single task by ID
router.get('/:userId/:taskId', getTask);

// Update a task by ID
router.put('/:userId/:taskId', updateTask);

//delete a task by ID
router.delete('/:userId/:taskId', deleteTask);

export default router;