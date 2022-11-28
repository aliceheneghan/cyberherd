// libraries
import express from 'express';

//middleware

import { uploadEventImage } from '../config/multer.js';

// controllers
import {
  findAllEvents,
  findEventById,
  findEventByDate,
  createEvent,
  updateEvent,
  deleteEvent,
} from '../controllers/eventControllers.js';

// validation & sanitization
import { validateEvent } from '../middleware/eventValidation.js';

const router = express.Router();

router.get('/', findAllEvents);

router.get('/:id', findEventById);

router.get('/date/:date', findEventByDate);

router.post('/create', uploadEventImage.single('image'), createEvent);

router.patch('/update/:id', updateEvent);

router.delete('/delete/:id', deleteEvent);

export default router;
