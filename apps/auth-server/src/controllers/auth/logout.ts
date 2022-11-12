import { NextFunction, Request, Response } from 'express';
import { getAllUserByRefreshToken } from '../../db';
import User from '../../models/user';

/**
 * It logs the user out by removing the refresh token from the user document in
 * the database
 */
export const logout = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const refreshToken = req.cookies.refreshToken;
  const accessToken = req.cookies.accessToken;

  // get the user from the database and remove the refresh token and access
  // token from the user document in the database
  const users = await getAllUserByRefreshToken(refreshToken);

  if (!users) {
    return next(new Error('User not found'));
  }

  // remove the refresh token and access token from the user document
  users.forEach((user) => {
    user.refresh_tokens = user.refresh_tokens.filter(
      (token) => token.token !== refreshToken
    );
    user.access_tokens = user.access_tokens.filter(
      (token) => token.token !== accessToken
    );

    User.updateOne({ _id: user._id }, user);
  });

  // remove the refresh token and access token from the cookies
  res.cookie('refreshToken', '', {
    maxAge: 0,
    httpOnly: true,
    domain: 'toctive.com',
  });

  res.send({ message: 'User logged out successfully' });
};

export default logout;
