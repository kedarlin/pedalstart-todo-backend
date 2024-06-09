import express from "express";
import  { deleteUser } from '../controllers/user.controller.js';

const router = express.Router();

//delete user using id
router.delete('/delete/:userId', deleteUser);

export default router;