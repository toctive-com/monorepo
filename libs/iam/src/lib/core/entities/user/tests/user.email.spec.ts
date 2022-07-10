import { describe, expect, it } from '@jest/globals';

import { makeUser } from '../index';
import makeFakeUser from '../../../../../../__test__/fixtures/user';

describe('Testing email', () => {
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

  it('should not throw an error if email is correct', () => {
    const fakeUser = makeFakeUser();

    expect(() => makeUser(fakeUser)).not.toThrowError();

    const user = makeUser(fakeUser);
    expect(user.getEmail()).toEqual(fakeUser.email);
  });
});
