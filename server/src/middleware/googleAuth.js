const passport = require('passport');
const User = require('../models/user');
const { cookie } = require('request');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.serializeUser(function (user, done) {
  done(null, user._id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => {
      done(new Error('Failed to deserialize a user.'));
    });
  done(null, user);
});

let callback;
if (process.env.NODE_ENV === 'development') {
  callback = 'http://solecomposer.com/auth/google/callback';
} else {
  callback = 'http://localhost:8000/auth/google/callback';
}

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: callback,
    },
    async (token, tokenSecret, profile, done) => {
      currentUser = await User.findOne({
        googleId: profile._json.sub,
      });
      if (!currentUser) {
        const newUser = await new User({
          googleId: profile._json.sub,
          firstName: profile._json.given_name,
          email: profile._json.email,
        }).save();
        if (newUser) {
          return done(null, newUser);
        }
      }
      return done(null, currentUser);
    }
  )
);

module.exports = passport;
