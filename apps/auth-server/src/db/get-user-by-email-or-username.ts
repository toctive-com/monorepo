import { UserI } from '../interfaces/user';
import User from '../models/user';

/**
 * Search for a user in database by email or username
 *
 * @param {string} email - string - the email of the user we want to get
 * @param {string} username - string - the username of the user we want to get
 * @returns A promise that resolves to a UserI or null
 */
export const getUserByEmailOrUsername = async (
  email: string,
  username: string
): Promise<UserI | null> => {
  const user = await User.findOne({ $or: [{ email }, { username }] });

  return user;
};

export default getUserByEmailOrUsername;
