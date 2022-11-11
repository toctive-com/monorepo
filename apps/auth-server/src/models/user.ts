import mongoose from 'mongoose';
import { UserI } from '../interfaces/user';

const Schema = mongoose.Schema;
const userTokenSchema = new Schema({
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: 30 * 86400 }, // 30 days
});

const userSchema = new Schema<UserI>({
  activated: {
    type: Boolean,
    default: false,
  },
  email: String,
  username: String,
  password: String,
  access_tokens: [userTokenSchema],
  refresh_tokens: [userTokenSchema],
  roles: [String],
  createdAt: Date,
  updateAt: Date,
});

export const User = mongoose.model('User', userSchema);
export default User;
