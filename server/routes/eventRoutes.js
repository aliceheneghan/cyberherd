import express from 'express';
import Event from '../models/eventModel.js';

const router = express.Router();

router.get('/', async(req, res) => {
    const events = await Event.find();
    return res.status(200).json(events);
});

router.post('/create', async(req, res) => {
    
});



export default router;
