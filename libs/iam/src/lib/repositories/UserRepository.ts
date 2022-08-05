import { validUserI } from '../core/interfaces';

/**
 * Defining the interface for the UserRepository class.
 * This repository is responsible for adding, getting, updating, and deleting users.
 */
export interface UserRepository {
  add: (user: validUserI) => Promise<validUserI>;
  update: (user: validUserI) => Promise<validUserI>;
  delete: (user: validUserI) => Promise<validUserI>;
  getById: (id: string) => Promise<validUserI>;
  getByEmail: (email: string) => Promise<validUserI> | Promise<boolean>;
  getAll: (user: validUserI) => Promise<validUserI[]>;
}

export default UserRepository;
