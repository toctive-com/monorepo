import bcrypt from 'bcrypt';
import generateTokens from '../../utils/auth/generate-token';
import { User } from '../../models/user';
import { NextFunction, Request, Response } from 'express';

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

  const user = await User.findOne({ $or: [{ email }, { username }] });

  // check if user exists
  if (!user) {
    return next(new Error('Email, username or password is not correct'));
  }

  // check if the password is correct
  const correctPassword = await bcrypt.compare(password, user.password);
  if (!correctPassword) {
    return next(new Error('Email, username or password is not correct'));
  }

  // generate tokens
  const tokens = await generateTokens(user);

  res.cookie('refreshToken', tokens.refreshToken, {
    maxAge: 1000 * 60 * 60 * 24 * 30, // 1 month in milliseconds
    httpOnly: true,
    domain: 'toctive.com',
  });

  return res.status(200).json(tokens);
};

export default login;
