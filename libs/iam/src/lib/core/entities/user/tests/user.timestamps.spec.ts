import { describe, expect, it } from '@jest/globals';

import { makeUser } from '../index';
import makeFakeUser from '../../../../../../__test__/fixtures/user';

describe('Testing timestamps', () => {
  describe('Testing wrong timestamps', () => {
    it('should throw an error if created at is not valid', () => {
      const createdAt = 'wrong createdAt';
      const fakeUser = makeFakeUser({ createdAt });

      expect(() => makeUser(fakeUser)).toThrowError(
        'CreatedAt must be a Date.'
      );
    });

    it('should throw an error if updated at is not valid', () => {
      const updatedAt = 'wrong updatedAt';
      const fakeUser = makeFakeUser({ updatedAt });

      expect(() => makeUser(fakeUser)).toThrowError(
        'UpdatedAt must be a Date.'
      );
    });

    it('should throw an error if deleted at is not valid', () => {
      const deletedAt = 'wrong deletedAt';
      const fakeUser = makeFakeUser({ deletedAt });

      expect(() => makeUser(fakeUser)).toThrowError(
        'DeletedAt must be a Date.'
      );
    });

    it('should throw an error if createdAt is newer than deletedAt', () => {
      const createdAt = new Date(2022, 1, 1);
      const updatedAt = new Date(2022, 1, 2); // to make sure that createdAt is older than updatedAt
      const deletedAt = new Date(2021, 1, 1);
      const fakeUser = makeFakeUser({ createdAt, updatedAt, deletedAt });

      expect(() => makeUser(fakeUser)).toThrowError(
        'CreatedAt cannot be greater than deletedAt.'
      );
    });

    it('should throw an error if createdAt is newer than updatedAt', () => {
      const createdAt = new Date(2022, 1, 1);
      const updatedAt = new Date(2021, 1, 1);
      const fakeUser = makeFakeUser({ createdAt, updatedAt });

      expect(() => makeUser(fakeUser)).toThrowError(
        'CreatedAt cannot be greater than updatedAt.'
      );
    });

    it('should throw an error if deletedAt is newer than updatedAt', () => {
      const deletedAt = new Date(2022, 1, 1);
      const updatedAt = new Date(2021, 1, 1);
      const fakeUser = makeFakeUser({ updatedAt, deletedAt });

      expect(() => makeUser(fakeUser)).toThrowError(
        'DeletedAt cannot be greater than updatedAt.'
      );
    });
  });

  describe('Testing valid timestamps', () => {
    it('should not throw an error if created at is valid', () => {
      const createdAt = new Date(Date.now());
      const fakeUser = makeFakeUser({ createdAt });

      expect(() => makeUser(fakeUser)).not.toThrowError(
        'CreatedAt must be a Date.'
      );
    });

    it('should not throw an error if updated at is valid', () => {
      const updatedAt = new Date(Date.now());
      const fakeUser = makeFakeUser({ updatedAt });

      expect(() => makeUser(fakeUser)).not.toThrowError(
        'UpdatedAt must be a Date.'
      );
    });

    it('should not throw an error if deleted at is valid', () => {
      const deletedAt = new Date(Date.now());
      const fakeUser = makeFakeUser({ deletedAt });

      expect(() => makeUser(fakeUser)).not.toThrowError(
        'DeletedAt must be a Date.'
      );
    });
  });
});
