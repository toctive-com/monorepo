import { describe, expect, it } from '@jest/globals';
import * as bcrypt from 'bcrypt';

import { makeUser } from '../index';
import makeFakeUser from '../../../../../../__test__/fixtures/user';

describe('Testing password', () => {
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

  it('should not throw an error if password is correct', (done) => {
    const fakeUser = makeFakeUser();

    expect(() => makeUser(fakeUser)).not.toThrowError();
    const user = makeUser(fakeUser);
    bcrypt.compare(fakeUser.password, user.getPasswordHash(), (err, res) => {
      expect(res).toEqual(true);
      done();
    });
  });
});
