import passport from 'passport';
import { ExtractJwt, Strategy as JWTStrategy } from 'passport-jwt';
import { User } from '../../models/user';
import { UserI } from '../../interfaces/user';

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'secret',
  issuer: 'accounts.toctive.com',
  audience: 'toctive.com',
};

passport.use(
  new JWTStrategy(opts, (jwt_payload, done) => {
    // find user by id
    User.findOne({ _id: jwt_payload.sub }, (err: Error, user: UserI) => {
      if (err) {
        return done(err, false);
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
