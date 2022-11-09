import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const venueSchema = new Schema({
  name: { type: String, required: true },
  location: {
    address: { type: String },
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
      required: true,
    }
  },
  venueType: { type: String, enum: ['bar', 'café', 'club', 'concert hall'] },
  event: {type: Schema.Types.ObjectId, ref: 'event'},
  rating: {
    venueRating: {type: Number},
    priceRating: {type: Number},
  },
  userFollowing: {type: Schema.Types.ObjectId, ref: 'user'},
});
