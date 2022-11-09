// libraries
import express from 'express';

// controllers
import {
    findAllVenues,
    findVenue,
    createVenue,
    updateVenue,
    deleteVenue,
} from '../controllers/venueControllers.js';

const router = express.Router();

router.get('/', findAllVenues);

router.get('/:id', findVenue);

router.post('/create', createVenue);

router.patch('/update/:id', updateVenue);

router.delete('/delete/:id', deleteVenue);

export default router;
