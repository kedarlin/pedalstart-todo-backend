import { errorHandler } from '../utils/error.js';
import User from '../models/user.model.js';

export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.userId);
    res.status(200).json({ message: 'User deleted successfully' })
  } catch (error) {
    next(error);
  }
};