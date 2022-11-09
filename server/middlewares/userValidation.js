// libraries
import expressValidator from 'express-validator';

const { body, validationResult } = expressValidator;

const validateUser = [
  body('userName')
    .exists()
    .trim()
    .isLength({ min: 1, max: 20 })
    .withMessage(
      'Firstname should not be empty, and be more than one and less than 20 characters'
    ),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ message: 'Validation errors userName', error: errors });
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
        .json({ message: 'Validation errors email', error: errors.msg });
    }

    next();
  },
];

export default validateUser;
