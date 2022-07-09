import { describe, expect, it } from '@jest/globals';

import { makeUser } from './index';
import makeFakeUser from '../../../../../__test__/fixtures/user';

describe('Test invalid values', () => {
  describe('Wrong firstName, lastName or middleName', () => {
    it('should throw an error if firstName is shorter than 2 characters', () => {
      const firstName = '1';
      const fakeUser = makeFakeUser({ firstName });
      expect(() => makeUser(fakeUser)).toThrowError(
        'First name must be at least 2 characters.'
      );
    });

    it('should throw an error if firstName is longer than 50 characters', () => {
      const firstName = Array.from({ length: 51 }, () => 'a').join('');
      const fakeUser = makeFakeUser({ firstName });
      expect(() => makeUser(fakeUser)).toThrowError(
        'First name must be less than 50 characters.'
      );
    });

    it('should throw an error if firstName contains bad words', () => {
      const firstName = 'my butt';
      const fakeUser = makeFakeUser({ firstName });
      expect(() => makeUser(fakeUser)).toThrowError(
        'First name must not contain bad words.'
      );
    });

    it('should throw an error if lastName is shorter than 2 characters', () => {
      const lastName = '1';
      const fakeUser = makeFakeUser({ lastName });
      expect(() => makeUser(fakeUser)).toThrowError(
        'Last name must be at least 2 characters.'
      );
    });

    it('should throw an error if lastName is longer than 50 characters', () => {
      const lastName = Array.from({ length: 51 }, () => 'a').join('');
      const fakeUser = makeFakeUser({ lastName });
      expect(() => makeUser(fakeUser)).toThrowError(
        'Last name must be less than 50 characters.'
      );
    });

    it('should throw an error if lastName contains bad words', () => {
      const lastName = 'my butt';
      const fakeUser = makeFakeUser({ lastName });
      expect(() => makeUser(fakeUser)).toThrowError(
        'Last name must not contain bad words.'
      );
    });

    it('should throw an error if middleName is shorter than 2 characters', () => {
      const middleName = '1';
      const fakeUser = makeFakeUser({ middleName });
      expect(() => makeUser(fakeUser)).toThrowError(
        'Middle name must be at least 2 characters.'
      );
    });

    it('should throw an error if middleName is longer than 50 characters', () => {
      const middleName = Array.from({ length: 51 }, () => 'a').join('');
      const fakeUser = makeFakeUser({ middleName });
      expect(() => makeUser(fakeUser)).toThrowError(
        'Middle name must be less than 50 characters.'
      );
    });

    it('should throw an error if middleName contains bad words', () => {
      const middleName = 'my butt';
      const fakeUser = makeFakeUser({ middleName });
      expect(() => makeUser(fakeUser)).toThrowError(
        'Middle name must not contain bad words.'
      );
    });
  });

  describe('Not valid email', () => {
    it('should throw an error if email is shorter than 5 characters', () => {
      const email = 'a@a';
      const fakeUser = makeFakeUser({ email });
      expect(() => makeUser(fakeUser)).toThrowError(
        'Email must be at least 5 characters.'
      );
    });
    it('should throw an error if email is longer than 255 characters', () => {
      const email = Array.from({ length: 256 }, () => 'a').join('');
      const fakeUser = makeFakeUser({ email });
      expect(() => makeUser(fakeUser)).toThrowError(
        'Email must be less than 255 characters.'
      );
    });
    it('should throw an error if email is not valid', () => {
      const email = 'wrong email';
      const fakeUser = makeFakeUser({ email });
      expect(() => makeUser(fakeUser)).toThrowError(
        'Email must be a valid email address.'
      );
    });
  });

  describe('Not valid password', () => {
    it('should throw an error if password is shorter than 8 characters', () => {
      const password = '123';
      const fakeUser = makeFakeUser({ password });
      expect(() => makeUser(fakeUser)).toThrowError(
        'Password must be at least 8 characters.'
      );
    });
    it('should throw an error if password is longer than 255 characters', () => {
      const password = Array.from({ length: 256 }, () => 'a').join('');
      const fakeUser = makeFakeUser({ password });
      expect(() => makeUser(fakeUser)).toThrowError(
        'Password must be less than 255 characters.'
      );
    });
    it('should throw an error if password is pwned already', () => {
      const password = '12345678';
      const fakeUser = makeFakeUser({ password });
      expect(() => makeUser(fakeUser)).toThrowError(
        'Password must not be a pwned password.'
      );
    });
  });

  describe('Not valid birthday', () => {
    it('should throw an error if birthday is not a valid UTC Date', () => {
      const birthday = Date.now();
      const fakeUser = makeFakeUser({ birthday });
      expect(() => makeUser(fakeUser)).toThrowError('Birthday must be a Date.');
    });
    it('should throw an error if user is younger than years old', () => {
      const birthday = new Date(Date.now());
      const fakeUser = makeFakeUser({ birthday });
      expect(() => makeUser(fakeUser)).toThrowError(
        'Birthday must be more than 13 years old.'
      );
    });
  });

  describe('Not valid profile image', () => {
    it('should throw an error if profileImage is not valid URL', () => {
      const profileImage = 'not valid URL';
      const fakeUser = makeFakeUser({ profileImage });
      expect(() => makeUser(fakeUser)).toThrowError(
        'Profile image must be a valid URL.'
      );
    });

    it('should throw an error if profileImage URL is longer than 2048 characters', () => {
      const profileImage = Array.from({ length: 1024 * 2 + 1 }, () => 'a').join(
        ''
      );
      const fakeUser = makeFakeUser({ profileImage });
      expect(() => makeUser(fakeUser)).toThrowError(
        'Profile image must be less than 2048 characters.'
      );
    });

    it('should throw an error if profileImage URL is longer than 4 characters', () => {
      const profileImage = 'a.a';
      const fakeUser = makeFakeUser({ profileImage });
      expect(() => makeUser(fakeUser)).toThrowError(
        'Profile image must be longer than 4 characters.'
      );
    });
  });

  describe('Not valid cover image', () => {
    it('should throw an error if coverImage is not valid URL', () => {
      const coverImage = 'not valid URL';
      const fakeUser = makeFakeUser({ coverImage });
      expect(() => makeUser(fakeUser)).toThrowError(
        'Cover image must be a valid URL.'
      );
    });

    it('should throw an error if coverImage URL is longer than 2048 characters', () => {
      const coverImage = Array.from({ length: 1024 * 2 + 1 }, () => 'a').join(
        ''
      );
      const fakeUser = makeFakeUser({ coverImage });
      expect(() => makeUser(fakeUser)).toThrowError(
        'Cover image must be less than 2048 characters.'
      );
    });

    it('should throw an error if coverImage URL is longer than 4 characters', () => {
      const coverImage = 'a.a';
      const fakeUser = makeFakeUser({ coverImage });
      expect(() => makeUser(fakeUser)).toThrowError(
        'Cover image must be longer than 4 characters.'
      );
    });
  });

  describe('Not valid bio description', () => {
    it('should throw an error if bio description is shorter than 2 characters', () => {
      const bioDescription = '1';
      const fakeUser = makeFakeUser({ bioDescription });
      expect(() => makeUser(fakeUser)).toThrowError(
        'Bio description must be at least 2 characters.'
      );
    });
    it('should throw an error if bio description is longer than 255 characters', () => {
      const bioDescription = Array.from({ length: 256 }, () => 'a').join('');
      const fakeUser = makeFakeUser({ bioDescription });
      expect(() => makeUser(fakeUser)).toThrowError(
        'Bio description must be less than 255 characters.'
      );
    });
    it('should throw an error if bio description is contains bad words', () => {
      const bioDescription = 'bad words';
      const fakeUser = makeFakeUser({ bioDescription });
      expect(() => makeUser(fakeUser)).toThrowError(
        'Bio description must not contain bad words.'
      );
    });
  });

  // TODO: create tests for IDs and timestamps
});
