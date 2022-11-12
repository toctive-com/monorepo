import { UserI } from '../interfaces/user';
import User from '../models/user';

/**
 * Search for a user in database by refresh token
 *
 * @param {string} token - string - the refresh token of the user we want to get
 * @returns A promise that resolves to a UserI or null
 */
export const getAllUserByRefreshToken = async (
  token: string
): Promise<UserI[] | null> => {
  const user = await User.find({
    refresh_tokens: { $elemMatch: { token } },
  });

  return user;
};

export default getAllUserByRefreshToken;
