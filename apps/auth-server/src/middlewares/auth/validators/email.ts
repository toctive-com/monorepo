import { NextFunction, Request, Response } from 'express';
import isemail from 'isemail';

export const validateEmail = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  if (!email) {
    return next({ error: true, status: 400, message: 'Email is required' });
  }

  if (!isemail.validate(email)) {
    return next({ error: true, status: 400, message: 'Email is invalid' });
  }

  return next();
};

export default validateEmail;
