// libraries
import express from 'express';

// middlewares
import validateUser from '../middlewares/userValidation.js';

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

router.post('/create', validateUser, registerUser);

router.patch('/update/:id', updateUserData);

router.delete('/delete/:id', deleteUser);

export default router;
