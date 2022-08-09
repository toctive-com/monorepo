import { UserRepository } from '../../repositories/UserRepository';

export const getAllUsersUseCase = (UserRepository: UserRepository) => {
  const Execute = async () => {
    return await UserRepository.getAll();
  };

  return {
    Execute,
  };
};

export default getAllUsersUseCase;
