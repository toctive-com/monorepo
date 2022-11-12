import dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';
import { verifyAccessToken } from '../../utils/auth';
import getAccessToken from '../../utils/auth/get-access-token';

// Load environment variables at apps/auth-server/.env
dotenv.config();

export const requireToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = getAccessToken(req, res, next);

    verifyAccessToken(token)
      .then((payload) => {
        res.locals.user = payload;
        return next();
      })
      .catch((err) => next(new Error(err)));
  } catch (err) {
    return next(err);
  }
};

export default requireToken;
