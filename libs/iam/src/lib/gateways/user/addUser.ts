import { makeUser } from '../../core/entities/user';
import { UserI } from '../../core/interfaces';
import { UserRepository } from '../../repositories/UserRepository';
import { CrmRepository } from '../../repositories/CrmRepository';

export default (UserRepository: UserRepository, CrmServices: CrmRepository) => {
  const addUser = async (user: UserI) => {
    // making a new user and validating the user's information
    const User = makeUser(user);

    /* Checking if the user already exists in the database. */
    if (await UserRepository.getByEmail(User.getEmail())) {
      throw new Error('User already exists');
    }

    // add the user to the database
    const newUser = await UserRepository.add(User);

    // notify crm system
    await CrmServices?.notify(
      `User Created successfully with email ${User.getEmail()}`
    );

    return newUser;
  };
  return {
    addUser,
  };
};
