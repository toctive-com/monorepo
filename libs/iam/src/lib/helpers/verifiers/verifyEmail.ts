import { SanitizeI } from '../../core/interfaces';
import { isString } from './datatype/isString';
import verifyStringLength from './verifyStringLength';

/**
 * "If the email is not a valid email address, throw an error."
 *
 * @param {string} email - The email address to verify.
 * @param {SanitizeI} sanitize - SanitizeI
 */
export function verifyEmail(email: string, sanitize: SanitizeI) {
  if (!email) {
    throw new Error('Email is required.');
  }

  isString(email, 'Email');
  verifyStringLength(email, 5, 255, 'Email');

  if (!sanitize.validateEmail(email)) {
    throw new Error('Email must be a valid email address.');
  } else if (sanitize.containsBadWords(email)) {
    throw new Error('Email must not contain bad words.');
  } else if (sanitize.isSpamEmail(email)) {
    throw new Error('Email must not be a spam email.');
  }
}
