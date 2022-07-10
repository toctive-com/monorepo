import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';

import { UserI, Gender } from '../../src/lib/core/interfaces';

/* A function that returns a fake user object. */
export default function makeFakeUser(
  overrides: Record<string, unknown> = {}
): UserI {
  const createdAt = faker.date.between(
    '2015-01-01T00:00:00.000Z',
    '2021-01-01T00:00:00.000Z'
  );
  let updatedAt = faker.date.between(
    '2021-01-01T00:00:00.000Z',
    '2022-01-01T00:00:00.000Z'
  );

  const markedDeleted = faker.datatype.boolean();
  let deletedAt;
  if (markedDeleted) {
    deletedAt = faker.date.between(
      '2022-02-02T00:00:00.000Z',
      '2022-04-04T00:00:00.000Z'
    );
    updatedAt = deletedAt;
  }

  const user = {
    id: uuidv4(),

    firstName: faker.name.firstName(),
    middleName: faker.name.middleName(),
    lastName: faker.name.lastName(),

    email: faker.internet.email(),
    password: faker.internet.password(),

    birthday: new Date(faker.date.birthdate({ min: 18, max: 65, mode: 'age' })),
    gender: faker.name.gender(true) as Gender,

    profileImage: faker.image.avatar(),
    coverImage: faker.image.abstract(1234, 2345),

    bioDescription: faker.lorem.paragraphs(2, '\n').slice(0, 255),

    address: faker.address.streetAddress(true),
    zip: faker.address.zipCode(),
    city: faker.address.city(),
    country: faker.address.country(),
    state: faker.address.state(),

    activeStatus: faker.datatype.boolean(),
    verified: faker.datatype.boolean(),
    activated: faker.datatype.boolean(),

    createdAt,
    updatedAt,

    markedDeleted,
    deletedAt,
  };

  return {
    ...user,
    ...overrides,
  };
}
