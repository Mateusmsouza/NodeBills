jwt = require('jwt-simple');

module.exports = (app) => {
  const users = app.get("datasourceUser");

  app.post('/auth', (req, res) => {

    if (req.body.user && req.body.password){

      users.findOne({
        where : { user: req.body.user }
      })
      .then( user => {

        if (user.password == req.body.password) { 
          res.json(
            {
              token: jwt.encode( {id: user.id} , "nodebills"),
            }
          );
        } else res.sendStatus(401); 
      })
      .catch( () => res.sendStatus(501))

    } else res.sendStatus(401); 

  });
};