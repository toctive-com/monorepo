import { UserI } from '../core/interfaces';
import CrmRepository from '../repositories/CrmRepository';
import UserRepository from '../repositories/UserRepository';
import {
  getUserByEmailUseCase,
  getUserByIdUseCase,
  addUserUseCase,
  updateUserUseCase,
  removeUserUseCase,
  getAllUsersUseCase,
} from '../use-cases/user';

interface DependenciesI {
  UserRepository: UserRepository;
  CrmRepository: CrmRepository;
}

export const UserController = (dependencies: DependenciesI) => {
  const { UserRepository, CrmRepository } = dependencies;

  //  TODO: add correct type for req, res, next parameters
  /**
   * It creates a new user in the database and notifies the CRM system about the new user
   * then add the user to the response object (res.locals.user) and send it to the next middleware
   *
   * @example POST /users
   * ```js
   * import { UserController, MongooseUserRepository, MongooseCrmRepository, } from '@toctive/iam';
   *
   * // you can use any other repositories you want
   * const { createUser } = UserController({
   *    UserRepository: mongooseUserModel,
   *    CrmRepository: mongooseCrmModel,
   * });
   *
   * app.post('/users', createUser, async (req, res, next) => {
   *    const { user } = res.locals;
   *    return res.status(201).send(`user created with email: ${user.getEmail()}`);
   * }
   * ```
   *
   *
   * @param {any} req - any - the request object
   * @param {any} res - the response object
   * @param {any} next - is a function that is used to call the next middleware in the chain.
   */
  const createUser = async (req: any, res: any, next: any) => {
    // required user information to make a new user in database
    const { firstName, lastName, email, password }: UserI = req.body;
    const user = { firstName, lastName, email, password };

    // initiate the use case to add a new user to the database and
    // notify crm system about the new use (if crm system is available)
    const addUserCommand = addUserUseCase(UserRepository, CrmRepository);

    // making a new user and validating the user's information
    let newUser;
    try {
      newUser = await addUserCommand.Execute(user);
    } catch (error) {
      next(error);
    }

    // add the user to the response object.
    // so that it can be used in the next middleware.
    res.locals.user = newUser;

    next();
  };

  //  TODO: add correct type for req, res, next parameters
  // TODO: replace all throw new Error('not implemented') with proper error handling using res.json
  /**
   * It deletes a user from database and notifies the CRM system about the deleted user
   * then add the user to the response object (res.locals.user) and send it to the next middleware
   *
   * @example DELETE /users/16ea9b38-557b-4b91-afe6-fca10d721126
   * ```js
   * import { UserController, MongooseUserRepository, MongooseCrmRepository, } from '@toctive/iam';
   *
   * // you can use any other repositories you want
   * const { deleteUser } = UserController({
   *    UserRepository: mongooseUserModel,
   *    CrmRepository: mongooseCrmModel,
   * });
   *
   * app.delete('/users/:hashId', deleteUser, async (req, res, next) => {
   *    const { user } = res.locals;
   *    return res.status(201).send(`user with email: ${user.getEmail()} was deleted`);
   * }
   * ```
   *
   *
   * @param {any} req - any - the request object
   * @param {any} res - the response object
   * @param {any} next - is a function that is used to call the next middleware in the chain.
   */
  const deleteUser = async (req: any, res: any, next: any) => {
    try {
      // required user information to make a new user in database
      const { hashId } = req.params;

      // Checking if the hashId is provided in the request body.
      // We need the hashId to get the user from the database then delete it.
      if (!hashId) {
        throw new Error('hashId is required');
      }

      // initiate the use case to get the user from database
      const getUserCommand = getUserByIdUseCase(UserRepository);
      const user = await getUserCommand.Execute(hashId);

      if (!user) {
        throw new Error('user not found');
      }

      // initiate the use case to add a new user to the database and
      // notify crm system about the new use (if crm system is available)
      const removeUserCommand = removeUserUseCase(
        UserRepository,
        CrmRepository
      );

      // making a new user and validating the user's information
      let deletedUser = await removeUserCommand.Execute(user);

      // add the user to the response object.
      // so that it can be used in the next middleware.
      res.locals.user = deletedUser;

      next();
    } catch (error) {
      next(error);
    }
  };

  /**
   * It updates a user in the database and notifies the CRM system about the new user
   * then add the user to the response object (res.locals.user) and send it to the next middleware
   *
   * @example PUT /users/16ea9b38-557b-4b91-afe6-fca10d721126
   * ```js
   * import { UserController, MongooseUserRepository, MongooseCrmRepository, } from '@toctive/iam';
   *
   * // you can use any other repositories you want
   * const { updateUser } = UserController({
   *    UserRepository: mongooseUserModel,
   *    CrmRepository: mongooseCrmModel,
   * });
   *
   * app.put('/users/:hashId', updateUser, async (req, res, next) => {
   *    const { user } = res.locals;
   *    return res.status(201).send(`user with email: ${user.getEmail()} was updated`);
   * }
   * ```
   *
   *
   * @param {any} req - any - the request object
   * @param {any} res - the response object
   * @param {any} next - is a function that is used to call the next middleware in the chain.
   */
  const updateUser = async (req: any, res: any, next: any) => {
    try {
      // required user information to make a new user in database
      const { hashId } = req.params;

      // Checking if the hashId is provided in the request body.
      // We need the hashId to get the user from the database then delete it.
      if (!hashId) {
        throw new Error('hashId is required');
      }

      // initiate the use case to get the user from database
      const getUserCommand = getUserByIdUseCase(UserRepository);
      const user = await getUserCommand.Execute(hashId);

      if (!user) {
        throw new Error('user not found');
      }

      // initiate the use case to get the user from database
      const updateUserCommand = updateUserUseCase(
        UserRepository,
        CrmRepository
      );
      const updatedUser = await updateUserCommand.Execute(user);

      // add the user to the response object.
      // so that it can be used in the next middleware.
      res.locals.user = updatedUser;

      next();
    } catch (error) {
      next(error);
    }
  };

  /**
   * It updates a user in the database and notifies the CRM system about the new user
   * then add the user to the response object (res.locals.user) and send it to the next middleware
   *
   * @example GET /users/16ea9b38-557b-4b91-afe6-fca10d721126
   * ```js
   * import { UserController, MongooseUserRepository, MongooseCrmRepository, } from '@toctive/iam';
   *
   * // you can use any other repositories you want
   * const { getUserById } = UserController({
   *    UserRepository: mongooseUserModel,
   *    CrmRepository: mongooseCrmModel,
   * });
   *
   * app.get('/users/:hashId', getUserById, async (req, res, next) => {
   *    const { user } = res.locals;
   *    return res.status(201).send(`user with email: ${user.getEmail()}`);
   * }
   * ```
   *
   *
   * @param {any} req - any - the request object
   * @param {any} res - the response object
   * @param {any} next - is a function that is used to call the next middleware in the chain.
   */
  const getUserById = async (req: any, res: any, next: any) => {
    try {
      // required user information to make a new user in database
      const { hashId } = req.params;

      // Checking if the hashId is provided in the request body.
      // We need the hashId to get the user from the database then delete it.
      if (!hashId) {
        throw new Error('hashId is required');
      }

      // initiate the use case to get the user from database
      const getUserCommand = getUserByIdUseCase(UserRepository);
      const user = await getUserCommand.Execute(hashId);

      if (!user) {
        throw new Error('user not found');
      }

      // add the user to the response object.
      // so that it can be used in the next middleware.
      res.locals.user = user;

      next();
    } catch (error) {
      next(error);
    }
  };

  /**
   * It updates a user in the database and notifies the CRM system about the new user
   * then add the user to the response object (res.locals.user) and send it to the next middleware
   *
   * @example GET /users/email/user@mail.com
   * ```js
   * import { UserController, MongooseUserRepository, MongooseCrmRepository, } from '@toctive/iam';
   *
   * // you can use any other repositories you want
   * const { getUserByEmail } = UserController({
   *    UserRepository: mongooseUserModel,
   *    CrmRepository: mongooseCrmModel,
   * });
   *
   * app.get('/users/email/:email', getUserByEmail, async (req, res, next) => {
   *    const { user } = res.locals;
   *    return res.status(201).send(`user with email: ${user.getEmail()}`);
   * }
   * ```
   *
   *
   * @param {any} req - any - the request object
   * @param {any} res - the response object
   * @param {any} next - is a function that is used to call the next middleware in the chain.
   */
  const getUserByEmail = async (req: any, res: any, next: any) => {
    try {
      // required user information to make a new user in database
      const { email } = req.params;

      // Checking if the hashId is provided in the request body.
      // We need the hashId to get the user from the database then delete it.
      if (!email) {
        throw new Error('email is required');
      }

      // initiate the use case to get the user from database
      const getUserCommand = getUserByEmailUseCase(UserRepository);
      const user = await getUserCommand.Execute(email);

      if (!user) {
        throw new Error('user not found');
      }

      // add the user to the response object.
      // so that it can be used in the next middleware.
      res.locals.user = user;

      next();
    } catch (error) {
      next(error);
    }
  };

  // TODO: add filters by the request query e.g. /users?firstName=sameh&lastName=sameh
  /**
   * It updates a user in the database and notifies the CRM system about the new user
   * then add the user to the response object (res.locals.user) and send it to the next middleware
   *
   * @example GET /users
   * ```js
   * import { UserController, MongooseUserRepository, MongooseCrmRepository, } from '@toctive/iam';
   *
   * // you can use any other repositories you want
   * const { getAllUsers } = UserController({
   *    UserRepository: mongooseUserModel,
   *    CrmRepository: mongooseCrmModel,
   * });
   *
   * app.get('/users', getAllUsers, async (req, res, next) => {
   *    const { users } = res.locals;
   *    return res.status(201).send(`found ${users.length} users`);
   * }
   * ```
   *
   *
   * @param {any} req - any - the request object
   * @param {any} res - the response object
   * @param {any} next - is a function that is used to call the next middleware in the chain.
   */
  const getAllUsers = async (req: any, res: any, next: any) => {
    try {
      // initiate the use case to get the user from database
      const getUserCommand = getAllUsersUseCase(UserRepository);
      const users = await getUserCommand.Execute();

      if (!users) {
        throw new Error('user not found');
      }

      // add the user to the response object.
      // so that it can be used in the next middleware.
      res.locals.users = users;

      next();
    } catch (error) {
      next(error);
    }
  };
  return {
    createUser,
    deleteUser,
    updateUser,
    getUserById,
    getUserByEmail,
    getAllUsers,
  };
};

export default UserController;
