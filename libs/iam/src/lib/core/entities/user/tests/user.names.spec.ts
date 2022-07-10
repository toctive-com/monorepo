import { describe, expect, it } from '@jest/globals';

import { makeUser } from '../index';
import makeFakeUser from '../../../../../../__test__/fixtures/user';

describe('Testing firstName, lastName or middleName', () => {
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

  it('should not throw an error if firstName is correct', () => {
    const fakeUser = makeFakeUser();

    expect(() => makeUser(fakeUser)).not.toThrowError();

    const user = makeUser(fakeUser);
    expect(user.getFirstName()).toEqual(fakeUser.firstName);
  });

  it('should not throw an error if lastName is correct', () => {
    const fakeUser = makeFakeUser();

    expect(() => makeUser(fakeUser)).not.toThrowError();

    const user = makeUser(fakeUser);
    expect(user.getLastName()).toEqual(fakeUser.lastName);
  });

  it('should not throw an error if middleName is correct', () => {
    const fakeUser = makeFakeUser();

    expect(() => makeUser(fakeUser)).not.toThrowError();

    const user = makeUser(fakeUser);
    expect(user.getMiddleName()).toEqual(fakeUser.middleName);
  });
});
