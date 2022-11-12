import { UserI } from '../interfaces/user';
import User from '../models/user';

/**
 * Search for a user in database by access token
 *
 * @param {string} token - string - the access token of the user we want to get
 * @returns A promise that resolves to a UserI or null
 */
export const getUserByAccessToken = async (
  token: string
): Promise<UserI | null> => {
  const user = await User.findOne({
    access_tokens: { $elemMatch: { token } },
  });

  return user;
};

export default getUserByAccessToken;
