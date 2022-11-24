// libraries
import express from 'express';

// middlewares
import validateUser from '../middleware/userValidation.js';
import { uploadUserImage } from '../config/multer.js';

// controllers
import {
  findAllUsers,
  findUser,
  registerUser,
  loginUser,
  logoutUser,
  updateUserData,
  deleteUser,
} from '../controllers/userControllers.js';

const router = express.Router();

router.get('/', findAllUsers);

router.get('/:id', findUser);

router.post(
  '/create',
  uploadUserImage.single('image'),
  validateUser,
  registerUser
);

router.post('/login', loginUser);

router.get('/logout', logoutUser);

router.patch('/update/:id', updateUserData);

router.delete('/delete/:id', deleteUser);

export default router;