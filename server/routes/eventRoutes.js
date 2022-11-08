import express from 'express';
import Event from '../models/eventModel.js';

const router = express.Router();

router.get('/', async(req, res) => {
    const events = await Event.find();
    return res.status(200).json(events);
});

router.post('/create', async(req, res) => {
    try {
        const {name, date, time, location, tickets, genre, information} = req.body;
        const createdEvent = await Event.create({
            name,
            date,
            time,
            location,
            tickets,
            genre,
            information
        });
        return res.status(200).json({message: 'Event created', createdEvent})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }  
});

export default router;
