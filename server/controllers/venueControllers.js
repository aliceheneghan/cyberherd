// model
import Venue from '../models/venueModel.js';

const findAllVenues = async (req, res) => {
  const venues = await Venue.find();
  return res.status(200).json(venues);
};

const findVenue = async (req, res) => {
  try {
    const venue = await Venue.findById(req.params.id);
    if (!venue) {
      return res.status(404).json({ message: 'Venue not found' });
    }
    return res.status(200).json({ venue });
  } catch (venue) {
    return res.status(500).json({ message: error.message });
  }
};

const createVenue = async (req, res) => {
  try {
    const {
      name,
      address,
      neighborhood,
      venueType,
      venueURL,
      event,
      venueRating,
      priceRating,
      userFollowing
    } = req.body;
    const createdVenue = await Venue.create({
      name,
      location: {address, neighborhood},
      venueType,
      venueURL,
      photoURL: `http://localhost:4000/images/${req.file?.filename}`,
      event,
      rating: { venueRating, priceRating },
      userFollowing,
    });
    return res.status(200).json({ message: 'Venue created', createdVenue, id: createdVenue._id });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateVenue = async (req, res) => {
  try {
    const {
      name,
      address,
      neighborhood,
      venueType,
      venueURL,
      event,
      venueRating,
      priceRating,
      userFollowing
    } = req.body;
    const updatedVenue = await Venue.findByIdAndUpdate(
      req.params.id,
      {
      name,
      location: {address, neighborhood},
      venueType,
      venueURL,
      event,
      rating: { venueRating, priceRating },
      userFollowing,
      },
      { new: true }
    );
    if (!updatedVenue) {
      return res.status(404).json('Venue not found');
    }
    return res.status(200).json({ message: 'Venue updated', updatedVenue });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteVenue = async (req, res) => {
  try {
    const venue = await Venue.findByIdAndDelete(req.params.id);
    if (!venue) {
      return res.status(404).json({ message: 'Venue not found' });
    }
    return res.status(200).json({ message: 'Venue successfully deleted' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export { findAllVenues, findVenue, createVenue, updateVenue, deleteVenue };
