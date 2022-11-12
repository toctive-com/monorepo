import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { UserI } from '../../interfaces/user';
import User from '../../models/user';

// Load environment variables at apps/auth-server/.env
dotenv.config();

export const generateTokens = async (user: UserI) => {
  try {
    const payload = { _id: user._id, roles: user.roles };

    const newAccessToken = jwt.sign(
      payload,
      process.env.ACCESS_TOKEN_PRIVATE_KEY || 'ACCESS',
      { expiresIn: '10m' }
    );
    const newRefreshToken = jwt.sign(
      payload,
      process.env.REFRESH_TOKEN_PRIVATE_KEY || 'REFRESH',
      { expiresIn: '30d' }
    );

    // remove tokens from user document in DB if it already exists
    user.access_tokens = user.access_tokens.filter(
      (tokenObj) => tokenObj.token !== newAccessToken
    );
    user.refresh_tokens = user.refresh_tokens.filter(
      (tokenObj) => tokenObj.token !== newRefreshToken
    );

    // add the new generated tokens to user document
    user.access_tokens.push({ token: newAccessToken, createdAt: new Date() });
    user.refresh_tokens.push({ token: newRefreshToken, createdAt: new Date() });

    await User.updateOne({ _id: user._id }, user);
    return Promise.resolve({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  } catch (err) {
    return Promise.reject(err);
  }
};

export default generateTokens;
