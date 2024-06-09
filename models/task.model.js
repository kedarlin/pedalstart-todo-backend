import mongoose from 'mongoose';

const { Schema } = mongoose;

// we are defining the Task schema
const taskSchema = new Schema({
  taskName: {
    type: String,
    required: true
  },
  taskDesc: {
    type: String,
    required: false
  },
  taskStatus: {
    type: Boolean,
    default: false,
  },
  taskType: {
    type: String,
    required: true
  },
  taskDate: {
    type: Date,
    required: true
  },
  deadlineTime: {
    type: Date,
    required: true
  }
}, {
  timestamps: true
});

// Creating the Task model
const Task = mongoose.model('Task', taskSchema, 'task');

//exporting the Task schema model
export default Task;
