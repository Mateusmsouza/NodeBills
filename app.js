const express = require('express');
const bodyParser = require ('body-parser');
const Sequelize = require('sequelize');
const entranceRouter = require('./routes/entrance');
const outflowRouter  = require('./routes/outflow');
const userRouter  = require('./routes/user');
//const authRouter = require('./routes/auth');
const entranceModel = require('./models/ENTRANCE');
const outflowModel = require('./models/OUTFLOW');
const userModel = require('./models/USERS');
//const authorization = require('./auth');
const sequelizeConf = require('./config/databaseconf');


const app = express();
app.set( "port", 3001 );
app.use( bodyParser.json() );

/* passportjs middleware  */ 
// const auth = authorization(app);
// app.use( auth.initialize() );
// app.set("auth", auth);

/*database init and setting these database instances to app*/
const sequelizeInstance = new Sequelize( sequelizeConf.config, {logging: console.log} );

const tableEntrance =  entranceModel(sequelizeInstance, Sequelize);
const tableOutflow =  outflowModel(sequelizeInstance, Sequelize);
const tableUser = userModel(sequelizeInstance, Sequelize);
app.set("datasourceEntrance", tableEntrance);
app.set("datasourceOutflow", tableOutflow);
app.set("datasourceUser", tableUser);

/* Routes initialize */
entranceRouter(app);
outflowRouter(app);
userRouter(app);
//authRouter(app);

/* sync database */
sequelizeInstance.sync()
  .then(() => {
    console.log("Database synchronized");
  })
  .catch((error) => { 
    console.log("Database sync failed!\n" + error);
  }); 

module.exports = app;