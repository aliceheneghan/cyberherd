// libraries
import expressValidator from 'express-validator';

const { body, validationResult } = expressValidator;

const validateEvent = [
  body('name.bandName')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Please provide a band name'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ message: 'Please choose band name.', error: errors });
    }

    next();
  },
  body('name.eventName').trim(),
  body('information.description').trim(),
  body('information.eventURL').trim(),
  body('information.bandURL').trim(),
];

export { validateEvent };
