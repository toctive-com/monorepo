import { UserI } from '../core/interfaces';
import CrmRepository from '../repositories/CrmRepository';
import UserRepository from '../repositories/UserRepository';
import addUser from '../use-cases/user/addUser';

interface DependenciesI {
  UserRepository: UserRepository;
  CrmRepository: CrmRepository;
}

export default (dependencies: DependenciesI) => {
  const { UserRepository, CrmRepository } = dependencies;

  //  TODO: add correct type for req, res, next parameters
  /**
   * It creates a new user in the database and notifies the CRM system about the new user
   * then add the user to the request object (req.user) and send it to the next middleware
   *
   * @example POST /api/users
   * ```js
   * import { UserController } from '@toctive/iam';
   * const { createUser } = UserController({ UserRepository, CrmRepository });
   *
   * app.post('/api/users', createUser, async (req, res, next) => {
   * return res.status(201).send(`user created with email: ${req.user.getEmail()}`);
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
    const addUserCommand = addUser(UserRepository, CrmRepository);

    // making a new user and validating the user's information
    const newUser = await addUserCommand.Execute(user);

    // add the user to the request object.
    // so that it can be used in the next middleware.
    req.user = newUser;

    next();
  };

  return {
    createUser,
  };
};
