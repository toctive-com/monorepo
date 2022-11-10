import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import { HttpError } from 'http-errors';
import handleErrors from '../middlewares/errors/handle-errors';

const app = express();

// all middlewares that needs to be applied to all routes
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// routes middlewares
app.get('/api', (req, res, next) => {
  // res.send({ message: 'Welcome to auth-server!' });
  const error = { message: 'Something went wrong!!' };
  next(error);
});

// error handling middleware
app.use(handleErrors);
app.use(function (
  err: HttpError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
) {
  res.status(err.status);
  res.json({ error: true, message: err.message });
});

export default app;
