import { UserRepository } from '../../repositories/UserRepository';

export const getUserByIdUseCase = (UserRepository: UserRepository) => {
  const Execute = async (hashId: string) => {
    return await UserRepository.getById(hashId);
  };

  return {
    Execute,
  };
};

export default getUserByIdUseCase;
