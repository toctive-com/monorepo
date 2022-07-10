/**
 * Verifies the timestamps of the user.
 *
 * @param {Date} createdAt - The date and time the record was created.
 * @param {Date} updatedAt - The date and time that the record was last updated.
 * @param {Date | null} deletedAt - The date and time that the record was deleted.
 */
export function verifyTimestamps(
  createdAt: Date,
  updatedAt: Date,
  deletedAt: Date | null
) {
  /* Checking if the createdAt and updatedAt are null. If they are null, it will throw an error. */
  if (createdAt === null) {
    throw new Error('CreatedAt cannot be null.');
  } else if (updatedAt === null) {
    throw new Error('UpdatedAt cannot be null.');
  }

  /* Checking the type of the variables createdAt, updatedAt and deletedAt. */
  if (!(createdAt instanceof Date)) {
    throw new Error('CreatedAt must be a Date.');
  } else if (!(updatedAt instanceof Date)) {
    throw new Error('UpdatedAt must be a Date.');
  } else if (deletedAt && !(deletedAt instanceof Date)) {
    throw new Error('DeletedAt must be a Date.');
  }

  /* Checking the dates to make sure they are in the correct order. */
  if (createdAt > updatedAt) {
    throw new Error('CreatedAt cannot be greater than updatedAt.');
  } else if (deletedAt && createdAt > deletedAt) {
    throw new Error('CreatedAt cannot be greater than deletedAt.');
  } else if (deletedAt && deletedAt > updatedAt) {
    throw new Error('DeletedAt cannot be greater than updatedAt.');
  }

  /* Checking if the createdAt, updatedAt, and deletedAt dates are in the future. */
  if (createdAt > new Date(Date.now())) {
    throw new Error('CreatedAt cannot be in the future.');
  } else if (updatedAt > new Date(Date.now())) {
    throw new Error('UpdatedAt cannot be in the future.');
  } else if (deletedAt && deletedAt > new Date(Date.now())) {
    throw new Error('DeletedAt cannot be in the future.');
  }

  /* Checking if the deletedAt and updatedAt are the same. */
  if (deletedAt && deletedAt !== updatedAt) {
    throw new Error('DeletedAt must be the same as updatedAt.');
  }
}
