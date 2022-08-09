import { validUserI } from '../../core/interfaces';
import { CrmRepository } from '../../repositories/CrmRepository';
import { UserRepository } from '../../repositories/UserRepository';

export const updateUserUseCase = (
  UserRepository: UserRepository,
  CrmServices: CrmRepository
) => {
  const Execute = async (user: validUserI) => {
    /* Checking if the user exists in the database before removing it. */
    const foundUser = await UserRepository.getById(user.getId());
    if (!foundUser) {
      throw new Error('There is no user with this id');
    }

    // add the user to the database
    const updatedUser: validUserI = await UserRepository.delete(user);

    // notify crm system
    await CrmServices?.notify({
      message: `User updated successfully with id ${user.getId()}`,
      data: updatedUser,
    });

    return updatedUser;
  };

  return {
    Execute,
  };
};

export default updateUserUseCase;
