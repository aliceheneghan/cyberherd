// libraries
import cors from 'cors';
import cookieParser from 'cookie-parser';
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import passport from 'passport';

// routes
import userRoutes from './routes/userRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import venueRoutes from './routes/venueRoutes.js';
import configureJwtStrategy from './config/passport-config.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());
app.use(cookieParser())

app.use(passport.initialize());
// to register the passport-jwt-strategy
configureJwtStrategy(passport);

// database connection
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`
  )
  .then(() => {
    console.log('Database connected!');
  })
  .catch((error) => {
    console.log(error.message);
  });

// endpoints
app.use('/api/user', userRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/venues', venueRoutes);

// serve frontEnd with uploadedImage
app.use('/images', express.static('./uploads/user/images'));
app.use('/images', express.static('./uploads/event/images'));
app.use('/images', express.static('./uploads/venue/images'));

const PORT = process.env.PORT;

app.listen(PORT, (req, res) => {
  console.log(`Server is listening on port ${PORT}!`);
});
