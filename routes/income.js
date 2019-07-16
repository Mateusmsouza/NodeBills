const Income = require('../controllers/income');

module.exports = (App) => {
  let Auth = App.get("auth");

  App.route('/Income')
      .all( Auth.authenticate() )
      .post((req, res ) =>{

        App.get("datasourceAccount").findOne(
          {where: {userid: req.user.id, name:req.body.account}}
          )
          .then( account => {
            const income = new Income(App.get("datasourceIncome"), req.body.value, account.accountid, req.body.date);

            income.commitToDatabase()
            .then(income => {
                res.status(200).json(income).send();
              })
              .catch(error => {
                console.log(error)
                res.status(500).send();
              })
          })
          .catch(() =>{
            res.status(400).json({message: "Invalid user account"}).send()
          })
        
      })

      .get( (req, res) => {
        const controller = new Income(App.get("datasourceIncome"));
        controller.findAllParam()
          .then(income => {
            res.status(200).json(income).send();
          })
          .catch((error)=>{
            console.log(error);
            res.status(404).send();
          })
      })

}