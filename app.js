const express = require('express');
const bodyParser = require ('body-parser');
const Sequelize = require('sequelize');
const movement = require('./routes/movement');
const outflow = require('./routes/outflow')
const sequelizeConf = require('./config/databaseconf');


const app = express();
app.set("port", 3001);
app.use(bodyParser.json());

const sequelizeInstance = new Sequelize( sequelizeConf.config );
const tableEntrance =  require('./models/ENTRANCE')(sequelizeInstance, Sequelize);
const tableOutflow =  require('./models/OUTFLOW')(sequelizeInstance, Sequelize);



movement(app, tableEntrance);
outflow(app, tableOutflow);

sequelizeInstance.sync()
  .then(() => {
    console.log("Database synchronized");
  })
module.exports = app;