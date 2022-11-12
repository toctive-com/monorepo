import { NextFunction, Request, Response } from 'express';

export const getAccessToken = (
  req: Request,
  res: Response,
  next: NextFunction
): string => {
  const token = req.headers.authorization || req.cookies.accessToken;
  if (!token) {
    next(new Error('Access token not found'));
  }
  return token.split(' ')[1];
};

export default getAccessToken;
