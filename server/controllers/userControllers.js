// libraries
import bcrypt from 'bcrypt';
import generateToken from '../helpers/authenticationHelper.js';
import mongoose from 'mongoose';

// schema
import User from '../models/userModel.js';

const findAllUsers = async (req, res) => {
  const users = await User.find();

  return res.status(200).json({ users });
};

const findUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const registerUser = async (req, res) => {
  console.log(req.body);
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
    const userUsernameExists = await User.findOne({ userName });
    const userEmailExists = await User.findOne({ email });

    if (userEmailExists) {
      return res.status(400).json({ message: 'Email already registered ' });
    } else if (userUsernameExists) {
      return res.status(400).json({ message: 'Username already exists' });
    }
    console.log('req.file = ', req.file); // file property is being added by multer
    console.log('req.body.userName = ', req.body.userName);
    console.log('req.body.dateOfBirth = ', req.body.dateOfBirth);

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
    /**
     * Advanced errorMessaging:
     * In case we have a ValidationError - statuscode(400)
     * In case we have a CastError - statuscode(500)
     * This errorMesssaging only appears inside userController.
     */
    if (error instanceof mongoose.Error.ValidationError) {
      return res.status(400).json({ message: error.message });
    } else if (error instanceof mongoose.Error.CastError) {
      return res.status(500).json({ message: error.message });
    }
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // error message if no password entered
    if (!password) {
      return res.status(400).json({ message: 'Please enter valid password.' });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Please enter your email.' });
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (checkPassword) {
      console.log('Login success ✅️');

      const token = await generateToken(user);

      return res
        .status(200)
        .cookie('jwt', token, {
          httpOnly: true,
          secure: false, // since we not using http(s)
          sameSite: false,
        })
        .json({ message: "You're logged in. Welcome!" });
    } else {
      return res.status(400).json({ message: 'No access granted!' });
    }
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return res.status(400).json({ message: error.message });
    } else if (error instanceof mongoose.Error.CastError) {
      return res.status(500).json({ message: error.message });
    }
  }
};

const logoutUser = (req, res) => {
  res
    .clearCookie('jwt', {
      httpOnly: true,
      secure: false,
      sameSite: false,
    })
    .json({ messsage: 'Logout with success' });
};

const updateUserData = async (req, res) => {
  try {
    const { email, userName, password, photoURL } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const updatedUserData = await User.findByIdAndUpdate(
      req.params.id,
      { email, userName, password: hashedPassword, photoURL },
      { new: true }
    );
    if (!updatedUserData) {
      return res.status(404).json('User not found');
    }
    return res
      .status(200)
      .json({ message: 'User data successfully updated', updatedUserData });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return res.status(400).json({ message: error.message });
    } else if (error instanceof mongoose.Error.CastError) {
      return res.status(500).json({ message: error.message });
    }
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({ message: 'User successfully deleted' });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export {
  findAllUsers,
  findUser,
  registerUser,
  loginUser,
  logoutUser,
  updateUserData,
  deleteUser,
};
