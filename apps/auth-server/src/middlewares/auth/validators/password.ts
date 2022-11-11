import { NextFunction, Request, Response } from 'express';

/**
 * Password validator middleware
 * This middleware will validate the password field in the request body.
 *
 * password is required and must be a string with a length between 8 and 255
 * password must contain at least one uppercase letter
 * password must contain at least one lowercase letter
 * password must contain at least one number
 *
 * @example ```js
 * // valid passwords
 * 'Password123'
 * 'Password123!'
 * 'Password123@'
 * 'Password123#'
 *
 * // invalid passwords
 * 'password123'
 * 'PASSWORD123'
 * 'password'
 * 'password123!'
 * 'password123@'
 * ```
 *
 * @param req
 * @param res
 * @param next
 * @returns
 */
export const validatePassword = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { password } = req.body;

  // password is required
  if (!password) {
    return next({ error: true, status: 400, message: 'Password is required' });
  }

  // username must be at least 8 characters long
  if (password.length < 8) {
    return next({
      error: true,
      status: 400,
      message: 'Password must be at least 8 characters long',
    });
  }

  // Password must be at most 255 characters long
  if (password.length > 255) {
    return next({
      error: true,
      status: 400,
      message: 'Password must be at most 255 characters long',
    });
  }

  let passwordIncludesNumber = false;
  let passwordIncludesLowercaseLetter = false;
  let passwordIncludesUppercaseLetter = false;

  for (const character of password) {
    if (
      !passwordIncludesLowercaseLetter &&
      'abcdefghijklmnopqrstuvwxyz'.includes(character)
    ) {
      passwordIncludesLowercaseLetter = true;
    }

    if (
      !passwordIncludesUppercaseLetter &&
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(character)
    ) {
      passwordIncludesUppercaseLetter = true;
    }

    if (!passwordIncludesNumber && '0123456789'.includes(character)) {
      passwordIncludesNumber = true;
    }

    if (
      passwordIncludesNumber &&
      passwordIncludesLowercaseLetter &&
      passwordIncludesUppercaseLetter
    ) {
      break;
    }
  }

  if (!passwordIncludesNumber) {
    return next({
      error: true,
      status: 400,
      message: 'Password must include at least one number',
    });
  }

  if (!passwordIncludesLowercaseLetter) {
    return next({
      error: true,
      status: 400,
      message: 'Password must include at least one lowercase letter',
    });
  }

  if (!passwordIncludesUppercaseLetter) {
    return next({
      error: true,
      status: 400,
      message: 'Password must include at least one uppercase letter',
    });
  }

  return next();
};

export default validatePassword;
