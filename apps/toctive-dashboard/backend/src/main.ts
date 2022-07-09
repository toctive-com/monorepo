/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';

import { makeUser } from '@toctive/ums';
const user = makeUser({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@doe.com',
  password: '123456789',
  birthday: new Date('1999-09-30'),
});
user.activate();
user.verify();

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to backend!', user: user.isVerify() });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
