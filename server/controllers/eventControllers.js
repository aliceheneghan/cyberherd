// model
import Event from '../models/eventModel.js';

const findAllEvents = async (req, res) => {
  const events = await Event.find().populate('location');
  return res.status(200).json(events);
};

const findEventByUserId = async (req, res) => {
  try {
    const events = await Event.find({
      userAttending: { $in: [req.params.userid] },
    });
    // const pastEvents = await Event.find({ userAttending: { "$in" : ["userid"]}, startDate:{$lt:new Date()} });

    return res.status(200).json({ events });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const findEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate('location');

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    return res.status(200).json({ event });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const findEventByDate = async (req, res) => {
  try {
    const event = await Event.find({ date: req.params.date }).populate(
      'location'
    );
    if (!event) {
      return res.status(404).json({ message: 'No events found' });
    }
    return res.status(200).json({ event });
  } catch (error) {
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
      photoURL: `/images/${req.file?.filename}`,
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
    console.log('Add this userID to updateEvent!!!!', req.user._id);

    // tell me if userID has been already added
    const userAlreadyAdded = await Event.findOne({
      _id: req.body.id,
      userAttending: { $in: req.user._id },
    });

    // const removeExistingUser = await Event.findByIdAndUpdate(req.body.id, {

    //   $pull: { userAttending: req.user._id },
    // });

    // const removeExistingUser = await Event.findOneAndDelete({
    //   userAttending: userAlreadyAdded,
    // })

    if (userAlreadyAdded) {
      const eventToReturn = await Event.findByIdAndUpdate(
        req.body.id,
        {
          $pull: { userAttending: req.user._id },
        },
        { new: true }
      );
      return res
        .status(200)
        .json({ message: 'UserID is removed', eventToReturn });
    }

    const updatedEvent = await Event.findByIdAndUpdate(
      req.body.id,
      {
        $addToSet: { userAttending: req.user._id },

        // $push: { userAttending: req.body.userAttending },
      },
      { new: true }
    );
    // const updatedEvent = await Event.findByIdAndUpdate(
    //   req.body.id,
    //   {
    //     name: { bandName, eventName },
    //     date,
    //     time: { startTime, doorsOpen },
    //     location,
    //     tickets: {
    //       preSalePrice: Number(preSalePrice),
    //       doorPrice: Number(doorPrice),
    //       ticketURL,
    //     },
    //     genre,
    //     information: { description, eventURL, bandURL },
    //     $addToSet: { userAttending: req.user._id },

    //     // $push: { userAttending: req.body.userAttending },
    //   },
    //   { new: true }
    // );

    if (!updatedEvent) {
      return res.status(404).json({ eventToReturn: null });
    }

    // if (removeExistingUser) {
    //   return res
    //     .status(200)
    //     .json('User is removed from this event');
    // }

    return res
      .status(200)
      .json({ message: 'Event updated', eventToReturn: updatedEvent });
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

export {
  findAllEvents,
  findEventByUserId,
  findEventById,
  findEventByDate,
  createEvent,
  updateEvent,
  deleteEvent,
};
