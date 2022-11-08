import mongoose from 'mongoose';

const { Schema, model } = mongoose;

/**
 * dateOfBirth is unrequired for testing reasons
 */

const userSchema = new Schema({
  email: { type: String, required: true },
  userName: { type: String, required: true },
  dateOfBirth: { required: false, type: Date },
  password: { type: String, required: true },
  photoURL: { type: String },
  events: { type: mongoose.Schema.Types.ObjectId, ref: 'events' },
  venues: { type: mongoose.Schema.Types.ObjectId, ref: 'vanues' },
  connections: { type: String },
});

const User = model('User', userSchema);

export default User;
