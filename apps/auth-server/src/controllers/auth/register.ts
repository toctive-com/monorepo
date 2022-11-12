import bcrypt from 'bcrypt';
import { UserI } from '../../interfaces/user';
import { User } from '../../models/user';
import { NextFunction, Request, Response } from 'express';

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, username, password } = req.body;

  User.findOne(
    { $or: [{ email }, { username }] },
    (err: Error, user: UserI) => {
      if (err) {
        return next(err);
      }

      // check if user email or username already in use
      if (user) {
        if (user.username === username) {
          return next({
            error: true,
            status: 400,
            message: 'Username is already in use',
          });
        }

        if (user.email === email) {
          return next({
            error: true,
            status: 400,
            message: 'Email is already in use',
          });
        }

        return next({
          error: true,
          status: 400,
          message: 'User is already exists',
        });
      }

      // generate salt and hash password using bcrypt
      bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          return next(err);
        }

        // encrypt user password using bcrypt
        bcrypt.hash(password, salt, async (err, hash) => {
          if (err) {
            return next(err);
          }

          const newUser = new User({
            email,
            username,
            password: hash,
          });
          await newUser.save();

          res.send({
            message: 'User registered successfully!',
          });
        });
      });
    }
  );
};

export default register;
