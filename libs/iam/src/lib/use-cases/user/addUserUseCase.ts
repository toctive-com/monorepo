import { makeUser } from '../../core/entities/user';
import { UserI, validUserI } from '../../core/interfaces';
import { UserRepository } from '../../repositories/UserRepository';
import { CrmRepository } from '../../repositories/CrmRepository';

export const addUserUseCase = (
  UserRepository: UserRepository,
  CrmServices: CrmRepository
) => {
  const Execute = async (user: UserI) => {
    // making a new user and validating the user's information
    const User: validUserI = makeUser(user);

    /* Checking if the user already exists in the database. */
    if (await UserRepository.getByEmail(User.getEmail())) {
      throw new Error('User already exists');
    }

    // add the user to the database
    const newUser: validUserI = await UserRepository.add(User);

    // notify crm system
    await CrmServices?.notify({
      message: `User Created successfully with email ${User.getEmail()}`,
      data: newUser,
    });

    return newUser;
  };

  return {
    Execute,
  };
};

export default addUserUseCase;
