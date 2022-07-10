import { describe, expect, it } from '@jest/globals';

import { makeUser } from '../index';
import makeFakeUser from '../../../../../../__test__/fixtures/user';

describe('Testing valid and wrong IDs', () => {
  it('should throw an error if id is not UUIDv4', () => {
    const id = 'wrong id';
    const fakeUser = makeFakeUser({ id });

    expect(() => makeUser(fakeUser)).toThrowError('Id must be a valid Id.');
  });

  it('should not throw an error if ID is a valid UUIDv4 ID', () => {
    const fakeUser = makeFakeUser();

    expect(() => makeUser(fakeUser)).not.toThrowError();
    const user = makeUser(fakeUser);
    expect(user.getId()).toEqual(fakeUser.id);
  });
});
