import { describe, expect, it } from '@jest/globals';

import { makeUser } from '../index';
import makeFakeUser from '../../../../../../__test__/fixtures/user';

describe('Testing profile image', () => {
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
      'Profile image must be at least 4 characters.'
    );
  });

  it('should not throw an error if profileImage URL is correct', () => {
    const fakeUser = makeFakeUser();

    expect(() => makeUser(fakeUser)).not.toThrowError();
    const user = makeUser(fakeUser);
    expect(user.getProfileImage()).toEqual(fakeUser.profileImage);
  });
});
