// Libraries

import express from 'express';
import Event from '../models/eventModel.js';

// Controllers

import { findAllEvents, createEvent } from '../controllers/eventControllers.js';

const router = express.Router();

router.get('/', findAllEvents);

router.post('/create', createEvent);

export default router;
