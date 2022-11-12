import { Router } from 'express';
import passport from 'passport';
import validateEmail from '../middlewares/auth/validators/email';
import validatePassword from '../middlewares/auth/validators/password';
import validateUsername from '../middlewares/auth/validators/username';

// auth controllers
import { login, register } from '../controllers/auth';
import { verifyRefreshToken } from '../utils/auth';

export const router = Router();
router.post('/login', login);

router.post(
  '/register',
  validateEmail,
  validateUsername,
  validatePassword,
  register
);

router.post('/logout', (req, res) => {
  res.send({ message: 'Login Route' });
});

router.get('/search/:id', async (req, res, next) => {
  verifyRefreshToken(req.params.id)
    .then((payload) => {
      res.send({ message: payload });
    })
    .catch((err) => next(new Error(err)));
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
  '/profile',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.send('welcome to your profile');
  }
);

export default router;
