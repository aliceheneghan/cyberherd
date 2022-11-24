// libraries
import mongoose from 'mongoose';

const { Schema, model } = mongoose;


const userSchema = new Schema({
  email: { type: String, required: true },
  userName: { type: String, required: true },
  dateOfBirth: { required: false, type: Date },
  password: { type: String, required: true },
  photoURL: { type: String },
  events: { type: Schema.Types.ObjectId, ref: 'event' },
  venues: { type: Schema.Types.ObjectId, ref: 'venue' },
  connections: {type: Schema.Types.ObjectId, ref: 'user' },
});

const User = model('user', userSchema);

export default User;