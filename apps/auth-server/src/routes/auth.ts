import { Router } from 'express';
import validateEmail from '../middlewares/auth/validators/email';
import validatePassword from '../middlewares/auth/validators/password';
import validateUsername from '../middlewares/auth/validators/username';

// auth controllers
import { login, logout, refresh, register } from '../controllers/auth';
import requireToken from '../middlewares/auth/require-token';

export const router = Router();

router.post(
  '/register',
  validateEmail,
  validateUsername,
  validatePassword,
  register
);

router.post('/login', login);
router.post('/logout', logout);

// get new token using refresh token
router.post('/refresh', refresh);

// activate the user account using the activation token sent to the user email
router.get('/activate/:token', (req, res) => {
  res.status(501).send({ message: 'Not Implemented Yet' });
});

router.get('/profile', requireToken, (req, res) => {
  console.log(res.locals.user);
  res.send('welcome to your profile');
});

export default router;
