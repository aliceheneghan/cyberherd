
// model
import Event from '../models/eventModel.js';

const findAllEvents = async (req, res) => {
  const events = await Event.find();
  return res.status(200).json(events);
};

const findEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(400).json({ message: 'Event not found' });
    }
    return res.status(200).json({ event });
  } catch (event) {
    return res.status(400).json({ message: error.message });
  }
};

const createEvent = async (req, res) => {
  try {
    const { name, date, time, location, tickets, genre, information } =
      req.body;
    const createdEvent = await Event.create({
      name,
      date,
      time,
      location,
      tickets,
      genre,
      information,
    });
    return res.status(200).json({ message: 'Event created', createdEvent });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateEvent = async (req, res) => {
  try {
    const { name, date, time, location, tickets, genre, information } =
      req.body;
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      { name, date, time, location, tickets, genre, information },
      { new: true }
    );
    if (!updatedEvent) {
      return res.status(404).json('Event not found');
    }
    return res.status(200).json({ message: 'Event updated', updatedEvent });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(400).json({ message: 'Event not found' });
    }
    return res.status(200).json({ message: 'Event successfully deleted' });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export { findAllEvents, findEvent, createEvent, updateEvent, deleteEvent };
