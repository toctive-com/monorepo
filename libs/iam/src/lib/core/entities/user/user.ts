import { UserI, IdI, HashI, SanitizeI, validUserI } from '../../interfaces';
import {
  verifyAddress,
  verifyDescription,
  verifyBirthday,
  verifyCity,
  verifyCountry,
  verifyCoverImage,
  verifyDeleteAt,
  verifyEmail,
  verifyFirstName,
  verifyId,
  verifyLastName,
  verifyMiddleName,
  verifyPassword,
  verifyProfileImage,
  verifyState,
  verifyTimestamps,
  verifyZip,
} from '../../../helpers/verifiers';

/**
 * It takes in an object with three functions, Id, hash, and sanitize, and returns a function that
 * takes in an object with the user's information and returns an object with the user's information and
 * functions to activate, deactivate, verify, and unverify the user
 * @param  - IdI - The Id interface.
 * @returns A function that takes an object as an argument.
 */
export default function buildMakeUser({
  Id,
  hash,
  sanitize,
}: {
  Id: IdI;
  hash: HashI;
  sanitize: SanitizeI;
}) {
  /**
   * It takes an object with the properties of a user and returns an object with the properties
   * of a user
   * @param {UserI}  - `id` - The id of the user.
   * @returns An object that contains the user's information.
   */
  return function makeUser({
    id = Id.makeId(),

    firstName,
    middleName = null,
    lastName,

    email,
    password,

    birthday = null,
    gender = null,
    profileImage = null,
    coverImage = null,
    bioDescription = null,

    address = null,
    city = null,
    zip = null,
    state = null,
    country = null,

    activeStatus = null,
    verified = false,
    activated = false,

    createdAt = new Date(Date.now()),
    updatedAt = new Date(Date.now()),

    markedDeleted = false,
    deletedAt = null,
  }: UserI): Readonly<validUserI> {
    /* Throwing an error if the id is not valid. */
    verifyId(id, Id);

    /* Checking if the firstName is not empty, if it is a string, if it is less than 50 characters, and
    if it is more than 2 characters. */
    verifyFirstName(firstName, sanitize);

    /* Checking if the lastName is not empty, if it is a string, if it is less than 50 characters, and
    if it is more than 2 characters. */
    verifyLastName(lastName, sanitize);

    /* Checking if the middleName is not empty, if it is a string, if it is less than 50 characters, and
    if it is more than 2 characters. */
    verifyMiddleName(middleName, sanitize);

    /* Checking if the email is not empty, if it is a string, if it is less than 255 characters, and
    if it is more than 5 characters. */
    verifyEmail(email, sanitize);

    /* Checking if the password is not empty, if it is a string, if it is less than 255 characters, and
    if it is more than 8 characters, if it is not pwned password. */
    verifyPassword(password, sanitize);

    /* Checking if the birthday is not empty, if it is a Date, if it is less than 13 years. */
    verifyBirthday(birthday);

    /* Checking if the profileImage is not empty, if it is less than 2048 characters, and if it is a
    valid URL. */
    verifyProfileImage(profileImage, sanitize);

    /* Checking if the coverImage is not empty, if it is less than 2048 characters, and if it is a
        valid URL. */
    verifyCoverImage(coverImage, sanitize);

    /* Checking if the bio is not empty, if it is a string, if it is less than 255 characters, and
    if it is more than 2 characters. */
    verifyDescription(bioDescription, sanitize);

    /* Checking to see if the address is a string, and if it is, it is checking to see if it is at
    least 5 characters long and less than 255 characters long. */
    verifyAddress(address);

    /* The above code is checking to see if the city variable is a string, and if it is, it is checking
    to see if the length of the string is between 2 and 255 characters. If it is not a string, it
    throws an error. */
    verifyCity(city);

    /* Checking to see if the zip code is a string, and if it is, it is checking to see if it is at
    least 5 characters long and less than 255 characters long. */
    verifyZip(zip);

    /* The above code is checking to see if the state is a string, and if it is, it is checking to see
    if the string is at least 2 characters long and less than 255 characters long. */
    verifyState(state);

    /* Checking to see if the country is a string, and if it is, it is checking to see if it is at
    least 2 characters long and less than 255 characters long. */
    verifyCountry(country);

    /* Checking if the user is marked as deleted and if the deletedAt is null. If it is, it throws an
    error. */
    verifyDeleteAt(markedDeleted, deletedAt);

    /* Checking if the dates are valid. */
    verifyTimestamps(createdAt, updatedAt, deletedAt);

    /* Generating a hash of the password using bcrypt algorithm. */
    const passwordHash = hash.generate(password);

    /* Creating a user object with the given parameters. */
    return Object.freeze({
      getId: () => id,

      getFirstName: () => firstName,
      getMiddleName: () => middleName,
      getLastName: () => lastName,
      getFullName: () =>
        `${firstName} ${middleName ? `${middleName} ` : ''}${lastName}`,

      getEmail: () => email,
      getPasswordHash: () => passwordHash,

      getBirthday: () => birthday,
      getAge: () =>
        birthday && new Date(Date.now()).getFullYear() - birthday.getFullYear(),
      getGender: () => gender,

      getBioDescription: () => bioDescription,
      getProfileImage: () => profileImage,
      getCoverImage: () => coverImage,

      getAddress: () => address,
      getCity: () => city,
      getZip: () => zip,
      getState: () => state,
      getCountry: () => country,

      getActiveStatus: () => activeStatus,

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

      getVerified: () => verified,
      isVerify: () => verified,
      verify: () => {
        verified = true;
        updatedAt = new Date(Date.now());
      },
      unverify: () => {
        verified = false;
        updatedAt = new Date(Date.now());
      },

      getCreatedAt: () => createdAt,
      getUpdatedAt: () => updatedAt,

      getMarkedDeleted: () => markedDeleted || false,
      getDeletedAt: () => deletedAt,
      markDeleted: () => {
        markedDeleted = true;
        deletedAt = updatedAt = new Date(Date.now());
      },
    });
  };
}
