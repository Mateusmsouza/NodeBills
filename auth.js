const passport = require('passport');
const jwtpassport = require('passport-jwt');
const Strategy = jwtpassport.Strategy;

let opts = {};
opts.jwtFromRequest = jwtpassport.ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = '2019';


module.exports = (App) => {
  
  const str = new Strategy(opts, (jwt_payload, done) => {

      App.get("datasourceUser").findOne({where : { id: jwt_payload.id}})
      .then(user => {
        
        console.log("User autenticado!");
        done(null, user)
      })
      .catch(error => {
        console.log("User Failed Auth!");
        done(false, error)
      });

  })

  passport.use(str)

  return {
    initialize: () => passport.initialize(),
    authenticate: () => passport.authenticate('jwt', { session: false, failureRedirect:'/login'} )
    ,
  }
}