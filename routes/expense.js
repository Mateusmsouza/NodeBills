const Expense = require('../controllers/expense');

module.exports = (App) => {

  App.route('/Expense')
    .all(App.get("auth").authenticate())
    .post(
        (req, res) => {
        const expense = new Expense(App.get("datasourceExpense"), req.body.value, req.body.account, req.user.id, req.body.date, req.body.scheduling);
        
        expense.commitToDatabase()
          .then(expense => {
            res.status(200).json(expense).send();
          })
          .catch(error => {
            res.status(404).send();
          })
        }
      )
      
    .get(
        (req, res) => {
          const expense = new Expense(App.get("datasourceExpense"));
      
          expense.findAllParam(req.body.value, req.body.account, req.body.user)
            .then(outflow => {
              res.status(200).json(outflow).send();
            })
            .catch((error)=>{
              res.status(404).send();
            })
          
        }
      )
}