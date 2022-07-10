import { SanitizeI } from '../../core/interfaces';
import { isString } from './datatype/isString';
import verifyStringLength from './verifyStringLength';

/**
 * "If the password is not a string, is longer than 255 characters, is shorter than 8 characters, or is
 * a pwned password, throw an error."
 *
 * @param {string} password - The password to verify.
 * @param {SanitizeI} sanitize - SanitizeI
 */
export function verifyPassword(password: string, sanitize: SanitizeI) {
  if (!password) {
    throw new Error('Password is required.');
  }

  isString(password, 'Password');
  verifyStringLength(password, 8, 255, 'Password');

  if (sanitize.isPwnedPassword(password)) {
    throw new Error('Password must not be a pwned password.');
  }
}
