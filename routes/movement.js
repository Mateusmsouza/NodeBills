const Entrance = require('../controllers/entrance');

module.exports = (App) => {
  App.post('/createEntrance', (req, res)=> {
    const data = req.body;
    const neWEntrance = new Entrance(data.value, data.account, data.user, data.date, data.scheduling);

    res.status(200).json(neWEntrance).send();
  })
}