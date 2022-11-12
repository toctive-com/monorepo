import { User } from '../../models/user';
import { NextFunction, Request, Response } from 'express';
import { verifyRefreshToken } from '../../utils/auth';

export const refresh = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const refreshToken = req.body.refreshToken || req.cookies.refreshToken;

  verifyRefreshToken(refreshToken)
    .then(async (payload) => {
      // get the user from the database and remove the refresh token and access
      // token from the user document in the database
      const user = await User.findOne({
        refresh_tokens: { $elemMatch: { token: refreshToken } },
      });

      if (!user) {
        return next(new Error('User not found'));
      }

      // remove the refresh token and access token from the user document
      user.refresh_tokens = user.refresh_tokens.filter(
        (token) => token.token !== refreshToken
      );
      user.save();

      res.cookie('refreshToken', '', {
        maxAge: 0,
        httpOnly: true,
        domain: 'toctive.com',
      });

      res.send({ message: payload });
    })
    .catch((err) => next(new Error(err)));
};

export default refresh;
