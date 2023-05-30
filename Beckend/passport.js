const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

// const GOOGLE_CLIENT_ID =
// "736494530178-apao95ukea4lesam8kctukhmlnolnsjq.apps.googleusercontent.com"
// const GOOGLE_CLIENT_SECRET = "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";

const GOOGLE_CLIENT_ID =
  "314103048956-d7qgndd79anoom3asjg4g9a7q6lrmevi.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";


passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
