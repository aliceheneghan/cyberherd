// libraries
import express from 'express';

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

router.delete('/delete/:id', deleteEvent)

export default router;
