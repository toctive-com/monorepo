import { expect, it } from '@jest/globals';

import { makeUser } from '../index';
import makeFakeUser from '../../../../../../__test__/fixtures/user';

it('should not throw an error creating a fake user', () => {
  const fakeUser = makeFakeUser({});

  expect(() => makeUser(fakeUser)).not.toThrowError();
});

// TODO: Add more tests for soft delete
