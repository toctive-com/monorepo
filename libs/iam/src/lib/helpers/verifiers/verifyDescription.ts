import { SanitizeI } from '../../core/interfaces';
import { isString } from './datatype/isString';
import verifyStringLength from './verifyStringLength';

/**
 * "Verify that the description is a string, is less than 255 characters, is at least 2 characters,
 * and does not contain bad words."
 *
 * @param {string | null} description - The description to verify.
 * @param {SanitizeI} sanitize - SanitizeI
 */
export function verifyDescription(
  description: string | null,
  sanitize: SanitizeI
) {
  if (description) {
    isString(description, 'Description');
    verifyStringLength(description, 2, 255, 'Description');

    if (sanitize.sanitize(description)) {
      throw new Error('Description must not contain bad words.');
    }
  }
}
