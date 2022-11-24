// libraries
import passportJWT from 'passport-jwt';

// models
import User from '../models/userModel';

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const configureJwtStrategy = (passport) => {
  passport.use(
    'jwt',
    new JWTStrategy(
      {
        // where is the token located in the request?
        // he is were we read the token from the cookie
        jwtFromRequest: (req) => req.cookies['jwt'],
        // which secret is used to sign it?
        secretOrKey: process.env.SECRET,
      },
      (jwtPayload, done) => {
        return User.findById(jwtPayload.sub)
          .select('_id email userName')
          .then((user) => {
            // attach a user object to trhe request object.
            // first parameter is error: null
            return done(null, user);
          })
          .catch((err) => {
            return done(err);
          });
      }
    )
  );
};
