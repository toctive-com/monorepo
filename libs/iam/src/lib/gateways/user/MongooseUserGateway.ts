import { validUserI } from '../../core/interfaces';

/**
 * It takes a user object and returns a user object that's compatible with Mongoose
 *
 * @param {validUserI} user - validUserI
 * @returns A UserI object
 */
export const UserToMongooseGateway = (user: validUserI) => {
  return {
    hashId: user.getId(),

    firstName: user.getFirstName(),
    middleName: user.getMiddleName(),
    lastName: user.getLastName(),

    email: user.getEmail(),
    password: user.getPasswordHash(),

    birthday: user.getBirthday(),
    gender: user.getGender(),
    profileImage: user.getProfileImage(),
    coverImage: user.getCoverImage(),
    bioDescription: user.getBioDescription(),

    address: user.getAddress(),
    city: user.getCity(),
    zip: user.getZip(),
    state: user.getState(),
    country: user.getCountry(),

    activeStatus: user.getActiveStatus(),
    verified: user.getVerified(),
    activated: user.getActivated(),

    createdAt: user.getCreatedAt(),
    updatedAt: user.getUpdatedAt(),

    markedDeleted: user.getMarkedDeleted(),
    deletedAt: user.getDeletedAt(),
  };
};
