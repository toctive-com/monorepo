import { UserI } from '../core/interfaces';

/**
 * Defining the interface for the UserRepository class.
 * This repository is responsible for adding, getting, updating, and deleting users.
 */
export interface UserRepository {
  add: (user: UserI) => Promise<UserI>;
  update: (user: UserI) => Promise<UserI>;
  delete: (user: UserI) => Promise<UserI>;
  getById: (id: string) => Promise<UserI>;
  getByEmail: (email: string) => Promise<UserI> | Promise<boolean>;
  getAll: (user: UserI) => Promise<UserI[]>;
}

export default UserRepository;
