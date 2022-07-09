import { UserI, IdI, HashI, SanitizeI } from '../../interfaces';

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
    activeStatus = null,
    verified = false,
    activated = false,
    createdAt = new Date(Date.now()),
    updatedAt = new Date(Date.now()),
  }: UserI) {
    /* Checking if the firstName is not empty, if it is a string, if it is less than 50 characters, and
    if it is more than 2 characters. */
    if (!firstName) {
      throw new Error('First name is required.');
    } else if (typeof firstName !== 'string') {
      throw new Error('First name must be a string.');
    } else if (firstName.length > 50) {
      throw new Error('First name must be less than 50 characters.');
    } else if (firstName.length < 2) {
      throw new Error('First name must be at least 2 characters.');
    } else if (sanitize.sanitize(firstName)) {
      throw new Error('First name must not contain bad words.');
    }

    /* Checking if the lastName is not empty, if it is a string, if it is less than 50 characters, and
    if it is more than 2 characters. */
    if (!lastName) {
      throw new Error('Last name is required.');
    } else if (typeof lastName !== 'string') {
      throw new Error('Last name must be a string.');
    } else if (lastName.length > 50) {
      throw new Error('Last name must be less than 50 characters.');
    } else if (lastName.length < 2) {
      throw new Error('Last name must be at least 2 characters.');
    } else if (sanitize.sanitize(lastName)) {
      throw new Error('Last name must not contain bad words.');
    }

    /* Checking if the middleName is not empty, if it is a string, if it is less than 50 characters, and
    if it is more than 2 characters. */
    if (middleName) {
      if (typeof middleName !== 'string') {
        throw new Error('Middle name must be a string.');
      } else if (middleName.length > 50) {
        throw new Error('Middle name must be less than 50 characters.');
      } else if (middleName.length < 2) {
        throw new Error('Middle name must be at least 2 characters.');
      } else if (sanitize.sanitize(middleName)) {
        throw new Error('Middle name must not contain bad words.');
      }
    }

    /* Checking if the email is not empty, if it is a string, if it is less than 255 characters, and
    if it is more than 5 characters. */
    if (!email) {
      throw new Error('Email is required.');
    } else if (typeof email !== 'string') {
      throw new Error('Email must be a string.');
    } else if (email.length > 255) {
      throw new Error('Email must be less than 255 characters.');
    } else if (email.length < 5) {
      throw new Error('Email must be at least 5 characters.');
    } else if (!sanitize.validateEmail(email)) {
      throw new Error('Email must be a valid email address.');
    } else if (sanitize.containsBadWords(email)) {
      throw new Error('Email must not contain bad words.');
    } else if (sanitize.isSpamEmail(email)) {
      throw new Error('Email must not be a spam email.');
    }

    /* Checking if the password is not empty, if it is a string, if it is less than 255 characters, and
    if it is more than 8 characters, if it is not pwned password. */
    if (!password) {
      throw new Error('Password is required.');
    } else if (typeof password !== 'string') {
      throw new Error('Password must be a string.');
    } else if (password.length > 255) {
      throw new Error('Password must be less than 255 characters.');
    } else if (password.length < 8) {
      throw new Error('Password must be at least 8 characters.');
    } else if (sanitize.isPwnedPassword(password)) {
      throw new Error('Password must not be a pwned password.');
    }

    /* Checking if the birthday is not empty, if it is a Date, if it is less than 13 years. */
    if (birthday) {
      if (!(birthday instanceof Date)) {
        throw new Error('Birthday must be a Date.');
      }

      const currentDate = new Date();
      const DateBefore13Years = new Date(
        currentDate.getFullYear() - 13,
        currentDate.getMonth(),
        currentDate.getDate()
      );
      if (birthday > DateBefore13Years) {
        throw new Error('Birthday must be more than 13 years old.');
      }
    }

    /* Checking if the profileImage is not empty, if it is less than 2048 characters, and if it is a
    valid URL. */
    // TODO: validate if the image is a file with extension jpg, jpeg, png or gif.
    if (profileImage) {
      // URL has maximum size of 2KB in some browsers.
      // Check: https://stackoverflow.com/questions/417142/what-is-the-maximum-length-of-a-url-in-different-browsers
      if (profileImage.length > 1024 * 2) {
        throw new Error('Profile image must be less than 2048 characters.');
      } else if (profileImage.length < 4) {
        throw new Error('Profile image must be longer than 4 characters.');
      }
      if (!sanitize.validateURL(profileImage)) {
        throw new Error('Profile image must be a valid URL.');
      }
    }

    /* Checking if the coverImage is not empty, if it is less than 2048 characters, and if it is a
        valid URL. */
    // TODO: validate if the image is a file with extension jpg, jpeg, png or gif.
    if (coverImage) {
      // URL has maximum size of 2KB in some browsers.
      // Check: https://stackoverflow.com/questions/417142/what-is-the-maximum-length-of-a-url-in-different-browsers
      if (coverImage.length > 1024 * 2) {
        throw new Error('Cover image must be less than 2048 characters.');
      } else if (coverImage.length < 4) {
        throw new Error('Cover image must be longer than 4 characters.');
      }
      if (!sanitize.validateURL(coverImage)) {
        throw new Error('Cover image must be a valid URL.');
      }
    }

    /* Checking if the bio is not empty, if it is a string, if it is less than 255 characters, and
    if it is more than 2 characters. */
    if (bioDescription) {
      if (typeof bioDescription !== 'string') {
        throw new Error('Bio description must be a string.');
      } else if (bioDescription.length > 255) {
        throw new Error('Bio description must be less than 255 characters.');
      } else if (bioDescription.length < 2) {
        throw new Error('Bio description must be at least 2 characters.');
      } else if (sanitize.sanitize(bioDescription)) {
        throw new Error('Bio description must not contain bad words.');
      }
    }

    const passwordHash = hash.generate(password);

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

      getActiveStatus: () => activeStatus,

      getVerified: () => verified,
      getActivated: () => activated,

      getCreatedAt: () => createdAt,
      getUpdatedAt: () => updatedAt,

      isActivated: () => activated,
      activate: () => {
        activated = true;
        updatedAt = new Date(Date.now());
      },
      deactivate: () => {
        activated = false;
        updatedAt = new Date(Date.now());
      },

      isVerify: () => verified,
      verify: () => {
        verified = true;
        updatedAt = new Date(Date.now());
      },
      unverify: () => {
        verified = false;
        updatedAt = new Date(Date.now());
      },
    });
  };
}
