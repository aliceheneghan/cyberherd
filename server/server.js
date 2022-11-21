// libraries
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// routes
import userRoutes from './routes/userRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import venueRoutes from './routes/venueRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors())

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
app.use("/user-images", express.static("./uploads/user-images"));

const PORT = process.env.PORT;

app.listen(PORT, (req, res) => {
  console.log(`Server is listening on port ${PORT}!`);
});
