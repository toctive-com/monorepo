import { UserI } from '../interfaces/user';
import User from '../models/user';

/**
 * Search for a user in database by id
 *
 * @param {string} id - string - the id of the user we want to get
 * @returns A promise that resolves to a UserI or null
 */
export const getUserById = async (id: string): Promise<UserI | null> => {
  const user = await User.findOne({ _id: id });

  return user;
};

export default getUserById;
