const logOut = (e) => {
  e.preventDefault();
  console.log(logOut);

  // clear data from storage
  localStorage.clear();
  sessionStorage.clear();

  setLoggedIn(false);
  navigate('/login');
}; 
// libraries
import express from 'express';

//middleware
import passport from 'passport';
import { uploadEventImage } from '../config/multer.js';

// controllers
import {
  findAllEvents,
  findEventById,
  findEventByDate,
  createEvent,
  updateEvent,
  deleteEvent,
  findEventByUserId,
} from '../controllers/eventControllers.js';

// validation & sanitization
import { validateEvent } from '../middleware/eventValidation.js';

const router = express.Router();

router.get('/', findAllEvents);

router.get('/byuserid/:userid', findEventByUserId);

router.get('/:id', findEventById);

router.get('/date/:date', findEventByDate);

router.post('/create', uploadEventImage.single('image'), createEvent);

router.patch(
  '/update',
  passport.authenticate('jwt', { session: false }),
  updateEvent
);

router.delete('/delete/:id', deleteEvent);

export default router;
