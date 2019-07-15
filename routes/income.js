const Income = require('../controllers/income');

module.exports = (App) => {
  let Auth = App.get("auth");

  App.route('/Income')
      .all( Auth.authenticate() )
      .post((req, res ) =>{
        const income = new Income(App.get("datasourceIncome"), req.body.value, req.body.account, req.user.id , req.body.date, req.body.scheduling);

        income.commitToDatabase()
        .then(income => {
            res.status(200).json(income).send();
          })
          .catch(error => {
            console.log(error)
            res.status(500).send();
          })
      })

      .get( (req, res) => {
        const controller = new Income(App.get("datasourceIncome"));
        controller.findAllParam(req.body.value, req.body.account, req.body.user)
          .then(income => {
            res.status(200).json(income).send();
          })
          .catch((error)=>{
            console.log(error);
            res.status(404).send();
          })
      })

}