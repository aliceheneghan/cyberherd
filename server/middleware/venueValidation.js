// libraries
import expressValidator from 'express-validator';

const { body, validationResult } = expressValidator;

const validateVenue = [
    body('name')
      .trim()
      .isLength({ min: 1 })
      .withMessage(
        'Please provide a venue name'
      ),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: 'Please choose venue name.', error: errors });
      }

      next();
    },
  body('venueURL').trim(),

]

export { validateVenue };
