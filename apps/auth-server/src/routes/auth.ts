import bcrypt from 'bcrypt';
import { Router } from 'express';
import passport from 'passport';
import { UserI } from '../interfaces/user';
import generateTokens from '../middlewares/auth/generate-token';
import validateEmail from '../middlewares/auth/validators/email';
import validatePassword from '../middlewares/auth/validators/password';
import validateUsername from '../middlewares/auth/validators/username';
import { User } from '../models/user';

export const router = Router();
router.post('/login', async (req, res, next) => {
  const { email, username, password } = req.body;
  if (!email && !username) {
    return next(new Error('You must enter an email or username'));
  }
  if (!password) {
    return next(new Error('You must enter a password'));
  }

  const user = await User.findOne({ $or: [{ email }, { username }] });

  // check if user exists
  if (!user) {
    return next(new Error('Email, username or password is not correct'));
  }

  // check if the password is correct
  const correctPassword = await bcrypt.compare(password, user.password);
  if (!correctPassword) {
    return next(new Error('Email, username or password is not correct'));
  }

  // generate tokens
  const tokens = await generateTokens(user);
  return res.status(200).json(tokens);
});

router.post('/logout', (req, res) => {
  res.send({ message: 'Login Route' });
});

// get new token using refresh token
router.post('/refresh', (req, res) => {
  res.send({ message: 'Login Route' });
});

// activate the user account using the activation token sent to the user email
router.get('/activate/:token', (req, res) => {
  res.send({ message: 'Login Route' });
});

router.post(
  '/register',
  validateEmail,
  validateUsername,
  validatePassword,
  (req, res, next) => {
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
  }
);

router.post(
  '/profile',
  passport.authenticate('jwt', { session: false }),
  (req, res, next) => {
    res.send('welcome to your profile');
  }
);

export default router;
