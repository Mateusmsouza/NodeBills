const passport = require('passport');
const pass = require('passport-jwt');

module.exports = (App) => {
  const users = App.get("datasourceUser");
  const options = {
    secretOrKey: "nodebills",
    jwtFromRequest: pass.ExtractJwt.fromAuthHeaderAsBearerToken()
  }

  const strategy = new pass.Strategy(options, (payload, done) => {

    users.findById(payload.id)
    .then( user => {
      if (user) {
        return done (null, user);
      }
      return done(null, false);
    })
    .catch(error => {
      done(error, null);
    })
  });


  passport.use(strategy);
  return {
    initialize: () => passport.initialize(),
    authenticate: () => passport.authenticate('jwt', { session: false } ),
  };
};