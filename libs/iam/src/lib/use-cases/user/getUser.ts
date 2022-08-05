import { makeUser } from '../../core/entities/user';
import { UserI } from '../../core/interfaces';
import { UserRepository } from '../../repositories/UserRepository';
import { CrmRepository } from '../../repositories/CrmRepository';

export default (UserRepository: UserRepository) => {
  const Execute = async (id: string) => {
    return await UserRepository.getById(id);
  };

  return {
    Execute,
  };
};
