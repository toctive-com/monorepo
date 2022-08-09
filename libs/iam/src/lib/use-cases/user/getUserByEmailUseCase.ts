import { UserRepository } from '../../repositories/UserRepository';

export const getUserByEmailUseCase = (UserRepository: UserRepository) => {
  const Execute = async (email: string) => {
    return await UserRepository.getByEmail(email);
  };

  return {
    Execute,
  };
};

export default getUserByEmailUseCase;
