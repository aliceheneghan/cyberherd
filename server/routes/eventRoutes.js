// libraries
import express from 'express';
import Event from '../models/eventModel.js';

// controllers
import {
  findAllEvents,
  findEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} from '../controllers/eventControllers.js';

const router = express.Router();

router.get('/', findAllEvents);

router.get('/:id', findEvent);

router.post('/create', createEvent);

router.patch('/update/:id', updateEvent);

export default router;
