const express = require('express');
const bodyParser = require ('body-parser');
const Sequelize = require('sequelize');
const movement = require('./routes/movement');
const sequelizeConf = require('./config/databaseconf');


const app = express();
app.set("port", 3001);
app.use(bodyParser.json());

const sequelizeInstance = new Sequelize( sequelizeConf.config );
require('./models/ENTRANCE')(sequelizeInstance, Sequelize)

sequelizeInstance.sync()
  .then(() => {
    console.log("Entrance synchronized");
  })

movement(app);
module.exports = app;