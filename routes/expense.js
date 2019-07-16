const Expense = require('../controllers/expense');

module.exports = (App) => {
  const auth = App.get("auth");

  App.route('/Expense')
      .all(auth.authenticate())
      .post( (req, res) => {
          // Verify is user account does exists and recover it
          App.get("datasourceAccount").findOne(
            {where: {userid: req.user.id, name:req.body.account}}
            )
            .then(account => {
              // magic happens here
              console.log("Após recuperar a conta")
              const expense = new Expense(App.get("datasourceExpense"), req.body.value, account.accountid, req.body.date);
          
              expense.commitToDatabase()
                .then(expense => {
                  res.status(200).json(expense).send();
                })
                .catch(error => {
                  res.status(404).send();
                })  

            })
            .catch(error => {
              console.log("error")
              res.status(400).json({message: "Invalid account user"}).send();
            })
          
          }
        )
      /*
    .get(
        (req, res) => {
          const expense = new Expense(App.get("datasourceExpense"));
      
          expense.findAllParam(req.body.value, req.body.user.id)
            .then(outflow => {
              res.status(200).json(outflow).send();
            })
            .catch((error)=>{
              res.status(404).send();
            })
          
        }
      )*/
}