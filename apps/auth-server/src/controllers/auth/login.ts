import bcrypt from 'bcrypt';
import generateTokens from '../../utils/auth/generate-token';
import { NextFunction, Request, Response } from 'express';
import getUserByEmailOrUsername from '../../db/get-user-by-email-or-username';

/**
 * Generate a new access token and refresh token for the user
 * email and password or username and password are required in request body
 */
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, username, password } = req.body;
  if (!email && !username) {
    return next(new Error('You must enter an email or username'));
  }
  if (!password) {
    return next(new Error('You must enter a password'));
  }

  // get the user from database
  const user = await getUserByEmailOrUsername(email, username);

  // check if user exists
  if (!user) {
    return next(new Error('Email, username or password is not correct'));
  }

  // check if the password is correct
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return next(new Error('Email, username or password is not correct'));
  }

  // generate access and refresh tokens
  const tokens = await generateTokens(user);

  // store refresh token in http-only cookie
  res.cookie('refreshToken', tokens.refreshToken, {
    maxAge: 1000 * 60 * 60 * 24 * 30, // 1 month in milliseconds
    httpOnly: true,
    domain: 'toctive.com',
  });

  return res.status(200).json(tokens);
};

export default login;
