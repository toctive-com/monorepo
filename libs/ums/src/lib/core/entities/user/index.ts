import { v4 as uuidv4, validate as uuidValidate } from 'uuid';
import * as bcrypt from 'bcrypt';

import buildMakeUser from './user';
import { HashI, IdI, SanitizeI } from '../../interfaces';

/* Creating an object that has two methods, makeId and isValidId. */
export const Id: IdI = {
  makeId: () => uuidv4(),
  isValidId: (id: string) => uuidValidate(id),
};

/* Creating a hash object that has two methods, generate and compare. */
export const hash: HashI = {
  generate: (password: string) => bcrypt.hashSync(password, 10),
  compare: (password: string, hash: string) =>
    bcrypt.compareSync(password, hash),
};

/* A mock of the sanitize module. */
export class Sanitize implements SanitizeI {
  sanitize = (str: string): string => {
    return this.containsBadWords(str) ? str : '';
  };

  /* Checking if the string contains any bad words. */
  containsBadWords = (str: string): boolean => {
    const badWords = ['butt', 'bad'];
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
  validateURL = (url: string): boolean => {
    let _url: URL | null = null;

    try {
      _url = new URL(url);
    } catch (error) {
      return false;
    }

    return _url?.protocol === 'http:' || _url?.protocol === 'https:';
  };
}

export const makeUser = buildMakeUser({ Id, hash, sanitize: new Sanitize() });
