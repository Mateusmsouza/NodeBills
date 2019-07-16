const Account = require('../controllers/account');

module.exports = (App) => {
  const auth = App.get("auth");

  App.route("/Account")
      .all(auth.authenticate())
      .post(
        (req, res) => {
          const account = new Account(App.get("datasourceAccount"), req.user.id, req.body.name, req.body.total, req.body.description);
       
          account.commitToDatabase()
            .then( account => {
              res.status(200).json(account).send();
            })
            .catch(error => {
              console.log(error);
              res.status(500).send();
            })
        }
      )


}