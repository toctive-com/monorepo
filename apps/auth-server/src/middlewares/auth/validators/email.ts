import { NextFunction, Request, Response } from 'express';
import isemail from 'isemail';
/**
 * Email validator middleware
 * This middleware will validate the email field in the request body.
 *
 * @example ```js
 * // valid usernames
 * 'john@example.com'
 * 'john.doe@example.com'
 * 'john+something@example.com'
 * 'john@localhost'
 *
 * // invalid usernames
 * 'john doe'
 * 'john.doe'
 * 'john.example.com'
 * 'john#doe'
 * ```
 *
 * @param req
 * @param res
 * @param next
 * @returns
 */
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
