const User = require('../controllers/user');

module.exports = (App) => {

  App.post("/User", (req, res) => {
      const user = new User( App.get("datasourceUser"), req.body.user, req.body.name, req.body.password);
      
      user.commitToDatabase()
      .then( (user) => {
        res.status(200).json(user).send();
      })
      .catch( (error) => {
        res.status(500).json(error).send();
      } )
    
  });

  App.get("/user", (req, res) => {
    const user = new User( App.get("datasourceUser"), req.body.user, req.body.name, req.body.password);
    
    user.findAllParam(req.body.user, req.body.name, req.body.password)
    .then( (user) => {
      res.status(200).json(user).send();
    })
    .catch( (error) => {
      res.status(500).json(error).send();
    } )
  
});
}