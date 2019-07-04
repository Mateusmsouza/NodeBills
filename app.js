const express = require('express');
const bodyParser = require ('body-parser');
const Sequelize = require('sequelize');
const movement = require('./routes/entrance');
const outflow = require('./routes/outflow')
const sequelizeConf = require('./config/databaseconf');


const app = express();
app.set("port", 3001);
app.use(bodyParser.json());

/*database init and setting these database instances to app*/
const sequelizeInstance = new Sequelize( sequelizeConf.config );
const tableEntrance =  require('./models/ENTRANCE')(sequelizeInstance, Sequelize);
const tableOutflow =  require('./models/OUTFLOW')(sequelizeInstance, Sequelize);
app.set("datasourceEntrance", tableEntrance);
app.set("datasourceOutflow", tableOutflow);

/* Routes initing */
movement(app);
outflow(app);

sequelizeInstance.sync()
  .then(() => {
    console.log("Database synchronized");
  })
  .catch(() => { 
    console.log("Database sync failed!");
  }); 
module.exports = app;