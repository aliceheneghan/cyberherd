// libraries
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const eventSchema = new Schema({
  name: {
    bandName: { type: String, required: false },
    eventName: { type: String },
  },
  date: { type: Date, required: false },
  time: {
    startTime: { type: String, required: false },
    doorsOpen: { type: String },
  },
  location: { type: Schema.Types.ObjectId, ref: 'venue' },
  tickets: {
    preSalePrice: { type: Number },
    doorPrice: { type: Number },
    ticketURL: { type: String },
  },
  genre: [
    {
      type: String,
      enum: [
        'Acoustic',
        'Afrobeat',
        'Alternative',
        'Electronic',
        'Experimental',
        'Folk',
        'Hardcore',
        'Hip-Hop',
        'Indie',
        'Krautrock',
        'Metal',
        'Pop',
        'Post-Punk',
        'Psychedelic',
        'Punk',
        'Rap',
        'Rock',
        'Shoegaze',
        'Singer Songwriter',
        'Stoner',
        'Trap',
      ],
      required: false,
    },
  ],
  information: {
    description: { type: String, required: false },
    eventURL: { type: String },
    bandURL: { type: String },
  },
  photoURL: { type: String },
  userAttending: [{ type: Schema.Types.ObjectId, ref: 'user' }],
});

const Event = model('event', eventSchema);

export default Event;
