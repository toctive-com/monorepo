import { makeUser } from 'libs/iam/src/lib/core/entities/user';
import { validUserI } from 'libs/iam/src/lib/core/interfaces';
import { UserToMongooseGateway } from 'libs/iam/src/lib/gateways/user/MongooseUserGateway';
import CrmRepository from 'libs/iam/src/lib/repositories/CrmRepository';

import Mongoose from 'mongoose';
const userSchema = new Mongoose.Schema({
  hashId: { type: String, required: true, unique: true },
  message: { type: String, required: true },
  data: { type: Map },
  createdAt: { type: Date, default: Date.now },
});
const CRM = Mongoose.model('CRM', userSchema);

export class MongooseCrmRepository implements CrmRepository {
  constructor() {}

  /**
   * notify crm system with message and data object.
   * The function takes an object with a message property and an optional data property, and returns a
   * promise that resolves to the data returned by the CRM.create function
   *
   * @param options - { message: string; data?: any }
   * @returns A promise that resolves to the data returned from the CRM.create method.
   */
  notify(options: { message: string; data?: any }) {
    const { message, data } = options;
    return new Promise<any>((resolve, reject) => {
      resolve(data);
      // CRM.create(options, (err, data) => {
      //   if (err) reject(err);

      //   resolve(data);
      // });
    });
  }
}

export default MongooseCrmRepository;
