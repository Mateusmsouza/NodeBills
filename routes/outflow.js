const Outflow = require('../controllers/outflow');

module.exports = (App) => {

  App.route('/Outflow')
    .all(App.get("auth").authenticate())
    .post(
        (req, res) => {
        const outflow = new Outflow(App.get("datasourceOutflow"), req.body.value, req.body.account, req.user.id, req.body.date, req.body.scheduling);
        
        outflow.commitToDatabase()
          .then(outflow => {
            res.status(200).json(outflow).send();
          })
          .catch(error => {
            res.status(404).send();
          })
        }
      )
      
    .get(
        (req, res) => {
          const controller = new Outflow(App.get("datasourceOutflow"));
      
          controller.findAllParam(req.body.value, req.body.account, req.body.user)
            .then(outflow => {
              res.status(200).json(outflow).send();
            })
            .catch((error)=>{
              res.status(404).send();
            })
          
        }
      )
}