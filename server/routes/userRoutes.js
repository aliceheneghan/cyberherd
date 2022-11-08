import express from 'express';

// controllers
import { findAllUsers, registerUser, updateUserData } from '../controllers/userControllers.js';

const router = express.Router();

router.get('/', findAllUsers);

router.post('/create', registerUser);

router.patch('/update/:id', updateUserData);

export default router;
