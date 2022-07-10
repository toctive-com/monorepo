import { SanitizeI } from '../../core/interfaces';
import { isString } from './datatype/isString';
import verifyStringLength from './verifyStringLength';

/**
 * "Verify that the middle name is a string, less than 50 characters, at least 2 characters, and does
 * not contain bad words."
 *
 * @param {string | null} middleName - string | null
 * @param {SanitizeI} sanitize - SanitizeI - This is the sanitize interface.
 */
export function verifyMiddleName(
  middleName: string | null,
  sanitize: SanitizeI
) {
  if (middleName) {
    isString(middleName, 'Middle name');
    verifyStringLength(middleName, 2, 50, 'Middle name');

    if (sanitize.sanitize(middleName)) {
      throw new Error('Middle name must not contain bad words.');
    }
  }
}
