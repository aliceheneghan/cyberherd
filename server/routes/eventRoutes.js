// Libraries

import express from 'express';
import Event from '../models/eventModel.js';

// Controllers

import { findAllEvents, findEvent, createEvent } from '../controllers/eventControllers.js';

const router = express.Router();

router.get('/', findAllEvents);

router.get('/:id', findEvent);

router.post('/create', createEvent);

router.patch('/update/:id', )

export default router;
