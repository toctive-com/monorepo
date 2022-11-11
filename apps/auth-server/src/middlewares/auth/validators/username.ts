import { NextFunction, Request, Response } from 'express';

/**
 * Username validator middleware
 * This middleware will validate the username field in the request body and
 * convert it to lowercase for the next middleware.
 *
 * username is required and must be a string with a length between 3 and 63
 * username must not contain any special characters. Only letters, numbers,
 * and underscores are allowed.
 * username must start with a letter [a-z]
 *
 * @example ```js
 * // valid usernames
 * 'john'
 * 'john_doe'
 * 'john-doe'
 * 'john123'
 * 'john123_doe'
 * 'john123-doe'
 *
 * // invalid usernames
 * 'john doe'
 * 'john.doe'
 * 'john@doe'
 * 'john#doe'
 * 'john$doe'
 * '123john'
 * ```
 *
 * @param req
 * @param res
 * @param next
 * @returns
 */
export const validateUsername = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username } = req.body;

  // username is required
  if (!username) {
    return next({ error: true, status: 400, message: 'Username is required' });
  }

  // username must be a lowercase string
  const usernameLowerCase = username.toLowerCase();
  req.body.username = usernameLowerCase;

  // username must be at least 3 characters long
  if (usernameLowerCase.length < 3) {
    return next({
      error: true,
      status: 400,
      message: 'Username must be at least 3 characters long',
    });
  }

  // username must be at most 63 characters long
  if (usernameLowerCase.length > 63) {
    return next({
      error: true,
      status: 400,
      message: 'Username must be at most 63 characters long',
    });
  }

  // username must start with a letter [a-z]
  if (!'abcdefghijklmnopqrstuvwxyz'.includes(usernameLowerCase[0])) {
    return next({
      error: true,
      status: 400,
      message: 'Username must start with a letter',
    });
  }

  // username must not contain any special characters
  for (const character of usernameLowerCase) {
    if (!'abcdefghijklmnopqrstuvwxyz0123456789-_'.includes(character)) {
      return next({
        error: true,
        status: 400,
        message:
          'Username can only contain letters, numbers, dashes and underscores',
      });
    }
  }

  return next();
};

export default validateUsername;
