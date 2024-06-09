import Task from '../models/task.model.js'
import User from '../models/user.model.js'
import { errorHandler } from '../utils/error.js';

// Creating a new task for the specified user
export const createTask = async (req, res, next) => {
  try {
    const { userId } = req.body;
    console.log(req.body);
    const user = await User.findById(userId);
    if (!user) {
      return next(errorHandler(404, 'User not found'));
    }
    const task = new Task(req.body);
    user.tasks.push(task); // Add the task to the user's tasks array
    await user.save();
    res.status(201).json(task);
  } catch (error) {
    console.log("Error in creating task:", error.message);
    next(errorHandler(400, error.message));
  }
};

// Get all tasks for the specified user
export const getTasks = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) {
      return next(errorHandler(404, 'User not found'));
    }
    res.status(200).json(user.tasks);
  } catch (error) {
    console.log("Error in getting all tasks:", error.message);
    next(errorHandler(500, error.message));
  }
};

// Get a single task by ID for the specified user
export const getTask = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) {
      return next(errorHandler(404, 'User not found'));
    }
    const task = user.tasks.id(req.params.taskId); // Find task by ID within user's tasks
    if (!task) {
      return next(errorHandler(404, 'Task not found'));
    }
    res.status(200).json(task);
  } catch (error) {
    console.log("Error in getting single task:", error.message);
    next(errorHandler(500, error.message));
  }
};

// Updating a task by ID for the specified user
export const updateTask = async (req, res, next) => {
  console.log("updatee");
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) {
      return next(errorHandler(404, 'User not found'));
    }
    const task = user.tasks.id(req.params.taskId); // Find task by ID within user's tasks
    if (!task) {
      return next(errorHandler(404, 'Task not found'));
    }
    Object.assign(task, req.body); // Update task properties
    await user.save();
    res.status(200).json(task);
  } catch (error) {
    console.log("Error in updating task:", error.message);
    next(errorHandler(400, error.message));
  }
};

// Deleting a task by ID for the specified user
export const deleteTask = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) {
      return next(errorHandler(404, 'User not found'));
    }
    user.tasks.id(req.params.taskId).deleteOne(); // Find and remove task by ID within user's tasks
    await user.save();
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.log("Error in deleting task:", error.message);
    next(errorHandler(500, error.message));
  }
};