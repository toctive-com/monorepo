import { IdI } from '../../core/interfaces';

/**
 * If the id is not valid, throw an error.
 * @param {string} id - The id to verify.
 * @param {IdI} Id - The Id class.
 */
export function verifyId(id: string, Id: IdI) {
  if (!id) {
    throw new Error('Id is required.');
  } else if (!Id.isValid(id)) {
    throw new Error('Id must be a valid Id.');
  }
}
