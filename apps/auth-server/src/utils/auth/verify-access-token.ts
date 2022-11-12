import jwt from 'jsonwebtoken';
import { UserI } from '../../interfaces/user';
import User from '../../models/user';

/**
 * It takes a refresh token as an argument, finds the user in the database,
 * verifies the refresh token, and returns the token payload
 *
 * @param {string} token - The refresh token that was sent to the client.
 */
export const verifyAccessToken = (token: string) => {
  return new Promise((resolve, reject) => {
    User.findOne(
      {
        access_tokens: { $elemMatch: { token: token } },
      },
      (err: Error, user: UserI) => {
        if (err) return reject(err);
        if (!user) return reject("User doesn't exists");

        const privateKey = process.env.ACCESS_TOKEN_PRIVATE_KEY || 'ACCESS';
        jwt.verify(token, privateKey, (err, payload) => {
          if (err) return reject(err);
          resolve(payload);
        });
      }
    );
  });
};

export default verifyAccessToken;
