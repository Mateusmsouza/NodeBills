jwt = require('jwt-simple');

module.exports = (app) => {
  const users = app.get("datasourceUser");

  app.post('/auth', (req, res) => {

    if (req.body.user && req.body.password){
      console.log("contem usuario e senha")
      users.findOne({
        where : { user: req.body.user }
      })
      .then( user => {
        console.log("user localizado")
        if (user.password == req.body.password) { 
          res.json(
            {
              token: jwt.encode( {id: user.id} , "2019"),
            }
          );
        } else res.sendStatus(401); 
      })
      .catch( () => {res.sendStatus(501)})

    } else {
      console.log("Erro no routes")
      res.sendStatus(401); 
    }

  });
};