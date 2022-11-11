import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app/app';

// Load environment variables at apps/auth-server/.env
dotenv.config();

const mongodbURI = process.env.MONGODB_URL || '';
mongoose.connect(mongodbURI, (err) => {
  if (err) {
    throw err;
  }

  console.log(`Connected to MongoDB at ${mongodbURI}`);

  const PORT = process.env.PORT || 3000;
  const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  server.on('error', console.error);
});
