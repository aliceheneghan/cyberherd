// libraries
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const venueSchema = new Schema({
  name: { type: String, required: false },
  location: {
    address: { type: String },
    latitude: { type: Number },
    longitude: { type: Number },
    neighborhood: {
      type: String,
      enum: [
        'Charlottenburg',
        'Friedrichshain',
        'Hellersdorf',
        'Köpenick',
        'Kreuzberg',
        'Lichtenberg',
        'Marzahn',
        'Mitte',
        'Neukölln',
        'Pankow',
        'Prenzlauer Berg',
        'Reinickendorf',
        'Schöneberg',
        'Schöneweide',
        'Spandau',
        'Steglitz',
        'Tempelhof',
        'Treptow',
        'Wedding',
        'Zehlendorf',
      ],
      required: false,
    },
  },
  venueType: {
    type: String,
    enum: ['Bar', 'Café', 'Club', 'Concert Hall', 'Cultural Center'],
  },
  venueURL: { type: String },
  photoURL: { type: String },
  event: { type: Schema.Types.ObjectId, ref: 'event' },
  rating: {
    venueRating: { type: Number },
    priceRating: { type: Number },
  },
  userFollowing: { type: Schema.Types.ObjectId, ref: 'user' },
});

const Venue = model('venue', venueSchema);

export default Venue;
