import { GroupI, IdI, SanitizeI } from '../../interfaces';
import {
  verifyCoverImage,
  verifyDeleteAt,
  verifyId,
  verifyProfileImage,
  verifyTimestamps,
  verifyDescription,
} from '../../../helpers/verifiers';
import { verifyTitle } from '../../../helpers/verifiers/verifyTitle';

export default function buildMakeGroup({
  Id,
  sanitize,
}: {
  Id: IdI;
  sanitize: SanitizeI;
}) {
  return function makeGroup({
    id = Id.makeId(),

    title,
    users = null,

    profileImage = null,
    coverImage = null,
    description = null,

    activated = false,

    createdAt = new Date(Date.now()),
    updatedAt = new Date(Date.now()),

    markedDeleted = false,
    deletedAt = null,
  }: GroupI) {
    /* Throwing an error if the id is not valid. */
    verifyId(id, Id);

    /* Checking if the title is not empty, if it is a string, if it is less than 255 characters, and
    if it is more than 2 characters. */
    verifyTitle(title, 'Title', sanitize);

    /* Checking if the profileImage is not empty, if it is less than 2048 characters, and if it is a
    valid URL. */
    verifyProfileImage(profileImage, sanitize);

    /* Checking if the coverImage is not empty, if it is less than 2048 characters, and if it is a
        valid URL. */
    verifyCoverImage(coverImage, sanitize);

    /* Checking if the description is not empty, if it is a string, if it is less than 255 characters, and
    if it is more than 2 characters. */
    verifyDescription(description, sanitize);

    /* Checking if the user is marked as deleted and if the deletedAt is null. If it is, it throws an
    error. */
    verifyDeleteAt(markedDeleted, deletedAt);

    /* Checking if the dates are valid. */
    verifyTimestamps(createdAt, updatedAt, deletedAt);

    /* Creating a user object with the given parameters. */
    return Object.freeze({
      getId: () => id,

      getTitle: () => title,

      getUsers: () => users,

      getDescription: () => description,
      getProfileImage: () => profileImage,
      getCoverImage: () => coverImage,

      getCreatedAt: () => createdAt,
      getUpdatedAt: () => updatedAt,

      getActivated: () => activated,
      isActivated: () => activated,
      activate: () => {
        activated = true;
        updatedAt = new Date(Date.now());
      },
      deactivate: () => {
        activated = false;
        updatedAt = new Date(Date.now());
      },

      getMarkedDeleted: () => markedDeleted || false,
      getDeletedAt: () => deletedAt,
      markDeleted: () => {
        markedDeleted = true;
        deletedAt = updatedAt = new Date(Date.now());
      },
    });
  };
}
