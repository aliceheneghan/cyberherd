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
      return res.status(404).json({ message: 'Event not found' });
    }
    return res.status(200).json({ event });
  } catch (event) {
    return res.status(500).json({ message: error.message });
  }
};

const createEvent = async (req, res) => {
  console.log(req.body);
  try {
    const {
      bandName,
      eventName,
      date,
      startTime,
      doorsOpen,
      location,
      preSalePrice,
      doorPrice,
      ticketURL,
      genre,
      description,
      eventURL,
      bandURL,
    } = req.body;
    const createdEvent = await Event.create({
      name: { bandName, eventName },
      date,
      time: { startTime, doorsOpen },
      location,
      tickets: {
        preSalePrice: Number(preSalePrice),
        doorPrice: Number(doorPrice),
        ticketURL,
      },
      genre,
      information: { description, eventURL, bandURL },
      photoURL: `http://localhost:4000/images/${req.file?.filename}`,
    });
    return res
      .status(200)
      .json({ message: 'Event created', createdEvent, id: createdEvent._id });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateEvent = async (req, res) => {
  try {
    const {
      bandName,
      eventName,
      date,
      startTime,
      doorsOpen,
      location,
      preSalePrice,
      doorPrice,
      ticketURL,
      genre,
      description,
      eventURL,
      bandURL,
      userAttending,
    } = req.body;
    console.log('req.Body of patch', req.body);
    console.log("updateEvent!!!!", req.user._id)


    const updatedEvent = await Event.findByIdAndUpdate(
      req.body.id,
      {
        name: { bandName, eventName },
        date,
        time: { startTime, doorsOpen },
        location,
        tickets: {
          preSalePrice: Number(preSalePrice),
          doorPrice: Number(doorPrice),
          ticketURL,
        },
        genre,
        information: { description, eventURL, bandURL },
        $push: { userAttending: req.user._id },
        // $push: { userAttending: req.body.userAttending },
      },
      { new: true }
    );
    if (!updatedEvent) {
      return res.status(404).json('Event not found');
    }
    return res.status(200).json({ message: 'Event updated', updatedEvent });
  } catch (error) {
    console.log('Eventupdate patch', error.message);
    return res.status(500).json({ message: error.message });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    return res.status(200).json({ message: 'Event successfully deleted' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export { findAllEvents, findEvent, createEvent, updateEvent, deleteEvent };
