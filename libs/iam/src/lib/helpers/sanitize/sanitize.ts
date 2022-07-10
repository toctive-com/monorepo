import { SanitizeI } from '../../core/interfaces';
import isURL from '../verifiers/datatype/isURL';

/* A mock of the sanitize module. */
export class Sanitize implements SanitizeI {
  sanitize = (str: string): string => {
    return this.containsBadWords(str) ? str : '';
  };

  /* Checking if the string contains any bad words. */
  containsBadWords = (str: string): boolean => {
    const badWords = ['butt'];
    return badWords.some((v) => str.includes(v)) || false;
  };

  /* Checking if the password is a pwned password. */
  isPwnedPassword = (password: string): boolean => {
    const pwnedPassword = ['12345678', 'password'];
    return pwnedPassword.includes(password) || false;
  };

  /* Checking if the email is a spam email. */
  isSpamEmail = (email: string): boolean => {
    const spamEmail = ['spam@mail.com', 'info@spam.com'];
    return spamEmail.includes(email) || false;
  };

  /* Validating the email. */
  validateEmail = (email: string): boolean => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  /* Validating the URL. */
  validateURL = (url: string): boolean => isURL(url);
}
