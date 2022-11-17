// libraries
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const eventSchema = new Schema({
  name: {
    bandName: { type: String, required: false },
    eventName: { type: String },
  },
  date: { type: String, required: false },
  time: {
    startTime: { type: String, required: false },
    doorsOpen: { type: String },
  },
  // location: { type: Schema.Types.ObjectId, ref: 'venue' },
  location: { type: String},
  tickets: {
    preSalePrice: { type: Number },
    doorPrice: { type: Number },
    ticketURL: { type: String },
  },
  genre: [{
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
      'Rock',
      'Pop',
      'Post-Punk',
      'Psychedelic',
      'Punk',
      'Rap',
      'Shoegaze',
      'Singer Songwriter',
      'Stoner',
      'Trap',
    ],
    required: false,
  }],
  information: {
    description: { type: String, required: false },
    eventURL: { type: String },
    bandURL: { type: String },
  },
  // userAttending: { type: Schema.Types.ObjectId, ref: 'user' },
});

const Event = model('event', eventSchema);

export default Event;
