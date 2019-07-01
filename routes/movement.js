const Entrance = require('../controllers/entrance');

module.exports = (App, sequelize) => {

  App.post('/Entrance', (req, res)=> {
    const entrance = new Entrance(req.body.value, req.body.account, req.body.user, req.body.date, req.body.scheduling);
    
    sequelize.create(entrance)
      .then(entrance => {
        res.status(200).json(entrance).send();
      })
      .catch(error => {
        res.status(404).send();
      })
    
  });

  App.get('/Entrance', (req, res) => {
    sequelize.findAll( {
      where: {
        value: req.body.value,
        account: req.body.account,
        user: req.body.user
        } 
      }
      )
      .then(entrance => {
        console.log(entrance);
        res.status(200).json(entrance).send();
      })
      .catch((error)=>{
        console.log("erro:");
        console.log(error);
        res.status(404).send();
      })
    
  });

}