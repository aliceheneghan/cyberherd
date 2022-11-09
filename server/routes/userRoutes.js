import express from 'express';

// controllers
import {
  findAllUsers,
  findUser,
  registerUser,
  updateUserData,
  deleteUser,
} from '../controllers/userControllers.js';

const router = express.Router();

router.get('/', findAllUsers);

router.get('/:id', findUser);

router.post('/create', registerUser);

router.patch('/update/:id', updateUserData);

router.delete('/delete/:id', deleteUser);

export default router;
