import { SanitizeI } from '../../core/interfaces';
import { verifyTitle } from './verifyTitle';

/**
 * Verify that the first name is a string, is between 2 and 50 characters, and does not contain bad
 * words.
 *
 * @param {string} firstName - The first name to verify.
 * @param {SanitizeI} sanitize - SanitizeI - This is the sanitize interface.
 */
export function verifyFirstName(firstName: string, sanitize: SanitizeI) {
  verifyTitle(firstName, 'First name', sanitize);
}
