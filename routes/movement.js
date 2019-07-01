const Entrance = require('../controllers/entrance');

module.exports = (App, sequelize) => {
  App.post('/Entrance', (req, res)=> {
    const data = req.body;
    const neWEntrance = new Entrance(data.value, data.account, data.user, data.date, data.scheduling);
    console.log(neWEntrance);

    sequelize.create(neWEntrance);
    res.status(200).json(neWEntrance).send();
  })
}