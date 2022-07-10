import { v4 as uuidv4, validate as uuidValidate } from 'uuid';
import * as bcrypt from 'bcrypt';

import { HashI, IdI } from '../../interfaces';
import buildMakeUser from './user';
import { Sanitize } from '../../../helpers/sanitize';

/* Creating an object that has two methods, makeId and isValidId. */
export const Id: IdI = {
  makeId: () => uuidv4(),
  isValid: (id: string) => uuidValidate(id),
};

/* Creating a hash object that has two methods, generate and compare. */
export const hash: HashI = {
  generate: (password: string) => bcrypt.hashSync(password, 10),
  compare: (password: string, hash: string) =>
    bcrypt.compareSync(password, hash),
};

export const makeUser = buildMakeUser({ Id, hash, sanitize: new Sanitize() });
