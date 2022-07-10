import { describe, expect, it } from '@jest/globals';

import { makeUser } from '../index';
import makeFakeUser from '../../../../../../__test__/fixtures/user';

describe('Testing cover image', () => {
  it('should throw an error if coverImage is not valid URL', () => {
    const coverImage = 'not valid URL';
    const fakeUser = makeFakeUser({ coverImage });

    expect(() => makeUser(fakeUser)).toThrowError(
      'Cover image must be a valid URL.'
    );
  });

  it('should throw an error if coverImage URL is longer than 2048 characters', () => {
    const coverImage = Array.from({ length: 1024 * 2 + 1 }, () => 'a').join('');
    const fakeUser = makeFakeUser({ coverImage });

    expect(() => makeUser(fakeUser)).toThrowError(
      'Cover image must be less than 2048 characters.'
    );
  });

  it('should throw an error if coverImage URL is longer than 4 characters', () => {
    const coverImage = 'a.a';
    const fakeUser = makeFakeUser({ coverImage });

    expect(() => makeUser(fakeUser)).toThrowError(
      'Cover image must be at least 4 characters.'
    );
  });

  it('should not throw an error if coverImage URL is correct', () => {
    const fakeUser = makeFakeUser();

    expect(() => makeUser(fakeUser)).not.toThrowError();
    const user = makeUser(fakeUser);
    expect(user.getCoverImage()).toEqual(fakeUser.coverImage);
  });
});
