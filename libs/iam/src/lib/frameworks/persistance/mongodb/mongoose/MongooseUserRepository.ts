import { makeUser } from 'libs/iam/src/lib/core/entities/user';
import { validUserI } from 'libs/iam/src/lib/core/interfaces';
import { UserToMongooseGateway } from 'libs/iam/src/lib/gateways/user/MongooseUserGateway';
import UserRepository from 'libs/iam/src/lib/repositories/UserRepository';

import Mongoose from 'mongoose';
const userSchema = new Mongoose.Schema(
  {
    hashId: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    middleName: { type: String },

    birthday: { type: Date, required: false },
    gender: { type: String },
    profileImage: { type: String },
    coverImage: { type: String },
    bioDescription: { type: String },

    address: { type: String },
    city: { type: String },
    zip: { type: String },
    state: { type: String },
    country: { type: String },

    activeStatus: { type: Boolean },
    verified: { type: Boolean },
    activated: { type: Boolean },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },

    markedDeleted: { type: Boolean },
    deletedAt: { type: Date, required: false },
  },
  { versionKey: false }
);
const User = Mongoose.model('User', userSchema);

export class MongooseUserRepository implements UserRepository {
  constructor() {}

  /**
   * We take a user object, convert it to a mongoose user object, then create a new user in the
   * database
   *
   * @param {validUserI} user - validUserI
   * @returns A promise that resolves to a validUserI
   */
  add(user: validUserI) {
    return new Promise<validUserI>((resolve, reject) => {
      const mongooseUser = UserToMongooseGateway(user);

      User.create(mongooseUser, (err, createdUser) => {
        if (err) reject(err);

        // Create User object
        const newUser = makeUser({
          ...createdUser.toObject(),
        });

        resolve(newUser);
      });
    });
  }

  /**
   * Update a user in the database and return a promise that resolves to a validUserI
   *
   * @param {validUserI} user - validUserI
   * @returns A promise that resolves to a validUserI
   */
  update(user: validUserI) {
    const mongooseUser = UserToMongooseGateway(user);

    return new Promise<validUserI>((resolve, reject) => {
      User.updateOne(
        { hashId: user.getId() },
        mongooseUser,
        (err: any, user: any) => {
          if (err) reject(err);
          resolve(user);
        }
      );
    });
  }

  /**
   * It deletes a user from the database and returns a promise that resolves to the user that was deleted
   *
   * @param {validUserI} user - validUserI - This is the user object that we want to delete.
   * @returns A promise that resolves to a validUserI
   */
  delete(user: validUserI) {
    return new Promise<validUserI>((resolve, reject) => {
      User.deleteOne({ hashId: user.getId() }, (err: any) => {
        if (err) reject(err);
        resolve(user);
      });
    });
  }

  /**
   * get a user by id from the database and return a promise that resolves to a validUserI or null if not found
   *
   * @param {string} hashId - the id of the user you want to get
   * @returns A promise that resolves to a validUserI or null.
   */
  getById(hashId: string) {
    return new Promise<validUserI | null>((resolve, reject) => {
      User.findOne({ hashId }, (err: any, user: any) => {
        if (err) reject(err);

        if (!user) {
          return resolve(null);
        }

        const newUser = makeUser({
          ...user.toObject(),
          passwordIsHashed: true,
        });

        resolve(newUser);
      });
    });
  }

  /**
   * get a user by email from the database and return a promise that resolves to a validUserI or null if not found
   *
   * @param {string} email - string - the email of the user we want to find
   * @returns A promise that resolves to a validUserI or null.
   */
  getByEmail(email: string) {
    return new Promise<validUserI | null>((resolve, reject) => {
      User.findOne({ email }, (err: any, user: any) => {
        if (err) reject(err);

        if (!user) {
          return resolve(null);
        }

        const newUser = makeUser({
          ...user.toObject(),
          passwordIsHashed: true,
        });

        resolve(newUser);
      });
    });
  }

  /**
   * get all users as a promise that resolves to an array of validUserI objects
   *
   * @returns A promise that resolves to an array of validUserI objects.
   */
  getAll() {
    return new Promise<validUserI[]>((resolve, reject) => {
      User.find({}, (err: any, users: any[]) => {
        if (err) reject(err);

        // loop on users and makeUser each one
        const newUsers = users.map((user) => {
          return makeUser({
            ...user.toObject(),
          });
        });

        resolve(newUsers);
      });
    });
  }
}

export default MongooseUserRepository;
