import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';

import {
  UserController,
  MongooseUserRepository,
  MongooseCrmRepository,
  UsersRouter,
} from '@toctive/iam';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/test');

// Using the default repositories to make UserController and all routes
const mongooseUserModel = new MongooseUserRepository();
const mongooseCrmModel = new MongooseCrmRepository();
const userController = UserController({
  UserRepository: mongooseUserModel,
  CrmRepository: mongooseCrmModel,
});
app.use('/api/v1/users', UsersRouter(userController));

// Error handling middleware
app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: true, message: err.message });
  next();
});

// Start the server
const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
