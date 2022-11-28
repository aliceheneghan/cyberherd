// libraries
import express from 'express';

//middleware
import passport from 'passport';
import { uploadEventImage } from '../config/multer.js';

// controllers
import {
  findAllEvents,
  findEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} from '../controllers/eventControllers.js';

// validation & sanitization
import { validateEvent } from '../middleware/eventValidation.js';

const router = express.Router();

router.get('/', findAllEvents);

router.get('/:id', findEvent);

router.post('/create', uploadEventImage.single('image'), createEvent);

router.patch('/update', passport.authenticate('jwt', { session: false }),updateEvent);

router.delete('/delete/:id', deleteEvent);

export default router;
