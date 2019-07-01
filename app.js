const express = require('express');
const bodyParser = require ('body-parser');
const Sequelize = require('sequelize');
const movement = require('./routes/movement');
const sequelizeConf = require('./config/databaseconf');


const app = express();
app.set("port", 3001);
app.use(bodyParser.json());

const sequelizeInstance = new Sequelize( sequelizeConf.config );
const tableEntrance =  require('./models/ENTRANCE')(sequelizeInstance, Sequelize);




movement(app, tableEntrance);

sequelizeInstance.sync()
  .then(() => {
    console.log("Database synchronized");
  })
module.exports = app;