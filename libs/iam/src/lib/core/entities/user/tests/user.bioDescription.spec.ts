import { describe, expect, it } from '@jest/globals';

import { makeUser } from '../index';
import makeFakeUser from '../../../../../../__test__/fixtures/user';

describe('Testing description', () => {
  it('should throw an error if description is shorter than 2 characters', () => {
    const bioDescription = '1';
    const fakeUser = makeFakeUser({ bioDescription });

    expect(() => makeUser(fakeUser)).toThrowError(
      'Description must be at least 2 characters.'
    );
  });

  it('should throw an error if description is longer than 255 characters', () => {
    const bioDescription = Array.from({ length: 256 }, () => 'a').join('');
    const fakeUser = makeFakeUser({ bioDescription });

    expect(() => makeUser(fakeUser)).toThrowError(
      'Description must be less than 255 characters.'
    );
  });

  it('should throw an error if description is contains bad words', () => {
    const bioDescription = 'my butt';
    const fakeUser = makeFakeUser({ bioDescription });

    expect(() => makeUser(fakeUser)).toThrowError(
      'Description must not contain bad words.'
    );
  });

  it('should not throw an error if description is correct', () => {
    const fakeUser = makeFakeUser();

    expect(() => makeUser(fakeUser)).not.toThrowError();
    const user = makeUser(fakeUser);
    expect(user.getBioDescription()).toEqual(fakeUser.bioDescription);
  });
});
