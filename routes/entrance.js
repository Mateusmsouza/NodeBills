const Entrance = require('../controllers/entrance');

module.exports = (App) => {
  let Auth = App.get("auth");

  App.route('/Entrance')
      .all( Auth.authenticate() )
      .post((req, res ) =>{
        const entrance = new Entrance(App.get("datasourceEntrance"), req.body.value, req.body.account, req.user.id , req.body.date, req.body.scheduling);

        entrance.commitToDatabase()
        .then(entrance => {
            res.status(200).json(entrance).send();
          })
          .catch(error => {
            console.log(error)
            res.status(500).send();
          })
      })

      .get( (req, res) => {
        const controller = new Entrance(App.get("datasourceEntrance"));
        controller.findAllParam(req.body.value, req.body.account, req.body.user)
          .then(entrance => {
            res.status(200).json(entrance).send();
          })
          .catch((error)=>{
            res.status(404).send();
          })
      })

}