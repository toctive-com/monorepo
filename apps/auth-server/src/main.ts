import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app/app';

// Load environment variables at apps/auth-server/.env
dotenv.config();

// Connect to MongoDB and start the server
const mongodbURI = process.env.MONGODB_URL || '';
mongoose.connect(mongodbURI, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Connected to MongoDB at ${mongodbURI}`);

  // Start the server
  const PORT = process.env.PORT || 3000;
  const server = app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  });

  // if there is an error on the server we can see it
  // TODO: log error using winston logger or logger server
  server.on('error', console.error);
});
