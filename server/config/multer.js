// libraries
import multer from 'multer';

const uploadUserImage = multer({
  dest: './uploads/user-images',
  limits: { fileSize: 5000000 },
});

const uploadEventImage = multer({
  dest: './uploads/event-images',
  limits: { fileSize: 5000000 },
});

const uploadVenueImage = multer({
  dest: './uploads/venue-images',
  limits: { fileSize: 5000000 },
});

export { uploadUserImage, uploadEventImage, uploadVenueImage };
