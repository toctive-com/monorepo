import { describe, expect, it } from '@jest/globals';

import { makeUser } from '../index';
import makeFakeUser from '../../../../../../__test__/fixtures/user';

describe('Testing birthday', () => {
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

  it('should not throw an error if user age is correct and older than 13 years', () => {
    const fakeUser = makeFakeUser();

    expect(() => makeUser(fakeUser)).not.toThrowError();
    const user = makeUser(fakeUser);
    const fakeUserAge =
      new Date(Date.now()).getFullYear() -
      new Date(fakeUser?.birthday || Date.now()).getFullYear();
    expect(user.getAge()).toEqual(fakeUserAge);
  });
});
