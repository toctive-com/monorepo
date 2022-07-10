import { SanitizeI } from '../../core/interfaces';
import { verifyTitle } from './verifyTitle';

/**
 * Verify that the last name is a string, is less than 50 characters, is at least 2 characters, and
 * does not contain bad words.
 *
 * @param {string} lastName - string - The last name to verify.
 * @param {SanitizeI} sanitize - SanitizeI - This is the sanitize interface.
 */

export function verifyLastName(lastName: string, sanitize: SanitizeI) {
  verifyTitle(lastName, 'Last name', sanitize);
}
