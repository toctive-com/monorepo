import { SanitizeI } from '../../core/interfaces';
import { isString } from './datatype/isString';
import verifyStringLength from './verifyStringLength';

/**
 * Verify that a title is a string of length 2 to 50 characters and does not contain bad words.
 *
 * @param {string} title - The title to verify.
 * @param {string} [field=Field] - The name of the field that is being verified.
 * @param {SanitizeI} sanitize - SanitizeI
 */
export function verifyTitle(
  title: string,
  field: string = 'Field',
  sanitize: SanitizeI
) {
  isString(title, field);
  verifyStringLength(title, 2, 50, field);

  if (sanitize.sanitize(title)) {
    throw new Error(`${field} must not contain bad words.`);
  }
}
