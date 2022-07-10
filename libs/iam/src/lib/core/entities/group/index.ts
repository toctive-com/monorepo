import { v4 as uuidv4, validate as uuidValidate } from 'uuid';

import buildMakeGroup from './group';
import { IdI } from '../../interfaces';
import { Sanitize } from '../../../helpers/sanitize';

/* Creating an object that has two methods, makeId and isValidId. */
export const Id: IdI = {
  makeId: () => uuidv4(),
  isValid: (id: string) => uuidValidate(id),
};

export const makeGroup = buildMakeGroup({ Id, sanitize: new Sanitize() });
