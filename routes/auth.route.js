import express from "express";
import { signin, signup } from '../controllers/auth.controller.js';

const router = express.Router();
//auth routes to sign and signup user
router.post('/signup',signup);
router.post('/signin',signin);


export default router;