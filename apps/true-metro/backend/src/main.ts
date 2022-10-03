/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import feedbackRoutes from './app/routes/feedback';
import servicesRoutes from './app/routes/services';
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URL);

const app = express.default();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to backend!' });
});
app.use('/api/v1/services', servicesRoutes);
app.use('/api/v1/feedback', feedbackRoutes);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
