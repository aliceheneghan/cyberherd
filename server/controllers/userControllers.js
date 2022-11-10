// libraries
import bcrypt from 'bcrypt';
import generateToken from '../helpers/authenticationHelper.js';

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
      return res.status(400).json({ message: "Email already registered " });
    } else if (userUsernameExists) {
      return res.status(400).json({ message: "Username already exists" });
    }

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

const loginUser = async (req, res) => {
  const { userName, password } = req.body;

  try {
    // error message if no password entered
    if (!password) {
      return res.status(400).json({ message: 'Please enter valid password.' });
    }

    const user = await User.findOne({ userName });

    if (!user) {
      return res.status(400).json({ message: 'Please enter your user name.' });
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
    return res.status(400).json({ message: error.message });
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
    return res.status(400).json({ message: error.message });
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
