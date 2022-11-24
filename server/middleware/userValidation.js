// libraries
import expressValidator from 'express-validator';

const { body, validationResult } = expressValidator;

const validateUser = [
  body('userName')
    .exists()
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage(
      'Please choose a valid username.'
    ),
  (req, res, next) => {
    console.log(req.body)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ message: 'Username should be between 4 and 20 characters.', error: errors });
    }

    next();
  },
  body('email')
    .exists()
    .trim()
    .isEmail()
    .withMessage('Please enter a valid email address.'),
  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ message: 'Please choose email', error: errors.msg });
    }

    next();
  },
];

export default validateUser;