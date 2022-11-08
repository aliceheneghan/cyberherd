import User from '../models/userModel.js';
import bcrypt from 'bcrypt';

export const findAllUsers = async (req, res) => {
  const users = await User.find();

  return res.status(200).json({ users });
};

export const registerUser = async (req, res) => {
  try {
    const {
      email,
      userName,
      dateOfBirth,
      password,
      photoURL,
      events,
      venues,
      connections,
    } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await User.create({
      email,
      userName,
      dateOfBirth,
      password: hashedPassword,
      photoURL,
      events,
      venues,
      connections,
    });
    console.log('User successfully registered 👌️');

    return res
      .status(200)
      .json({ message: 'User successfully created', createdUser });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const updateUserData = async (req, res) => {
  try {
    const { email, userName, password, photoURL } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const updatedUserData = await User.findByIdAndUpdate(
      req.params.id,
      { email, userName, password: hashedPassword, photoURL },
      { new: true }
    );
    return res
      .status(200)
      .json({ message: 'User data successfully updated', updatedUserData });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
