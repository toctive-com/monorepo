/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import postsRouter from './app/routes/posts';

const app = express();

app.get('/api/v1', (req, res) => {
  res.send({ message: 'Welcome to backend!' });
});

app.use('/api/v1/posts', postsRouter);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
