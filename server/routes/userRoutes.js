import express from 'express';

// controllers
import { findAllUsers, registerUser } from '../controllers/userControllers.js';

const router = express.Router();

router.get('/', findAllUsers);

router.post('/create', registerUser);

export default router;
