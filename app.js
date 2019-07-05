const express = require('express');
const bodyParser = require ('body-parser');
const Sequelize = require('sequelize');
const movement = require('./routes/entrance');
const outflow = require('./routes/outflow');
const user = require('./routes/user');
const authRouter = require('./routes/auth');
const authorization = require('./auth');
const sequelizeConf = require('./config/databaseconf');


const app = express();
app.set( "port", 3001 );
app.use( bodyParser.json() );

/* passportjs middleware  */ 
const auth = authorization(app);
app.use( auth.initialize() );
app.set("auth", auth);

/*database init and setting these database instances to app*/
const sequelizeInstance = new Sequelize( sequelizeConf.config );
const tableEntrance =  require('./models/ENTRANCE')(sequelizeInstance, Sequelize);
const tableOutflow =  require('./models/OUTFLOW')(sequelizeInstance, Sequelize);
const tableUser = require('./models/USERS')(sequelizeInstance, Sequelize);
app.set("datasourceEntrance", tableEntrance);
app.set("datasourceOutflow", tableOutflow);
app.set("datasourceUser", tableUser);

/* Routes initialize */
movement(app);
outflow(app);
user(app);
authRouter(app);

/* sync database */
sequelizeInstance.sync()
  .then(() => {
    console.log("Database synchronized");
  })
  .catch((error) => { 
    console.log("Database sync failed!\n" + error);
  }); 
module.exports = app;