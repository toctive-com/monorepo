import passport from 'passport';
import { ExtractJwt, Strategy as JWTStrategy } from 'passport-jwt';
import { getUserById } from '../../db';

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'secret',
  issuer: 'accounts.toctive.com',
  audience: 'toctive.com',
};

passport.use(
  new JWTStrategy(opts, (jwt_payload, done) => {
    // find user by id
    getUserById(jwt_payload._id).then((user) => {
      if (!user) {
        return done(new Error("User doesn't exist"), false);
      }

      // if user exists, return user
      if (user) {
        return done(null, user);
      }

      // else return false
      return done(null, false);
    });
  })
);
