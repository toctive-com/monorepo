import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';

import { UserI, Gender } from '../../src/lib/core/interfaces';

/* A function that returns a fake user object. */
export default function makeFakeUser(
  overrides: Record<string, unknown>
): UserI {
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

    bioDescription: faker.lorem.paragraphs(2, '\n'),

    activeStatus: faker.datatype.boolean(),
    verified: faker.datatype.boolean(),
    activated: faker.datatype.boolean(),

    createdAt: new Date(faker.date.past(4)),
    updatedAt: new Date(faker.date.past(1)),
  };

  return {
    ...user,
    ...overrides,
  };
}
