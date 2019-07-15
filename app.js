const express = require('express');
const expressejsLayout = require('express-ejs-layouts');
const bodyParser = require ('body-parser');
const Sequelize = require('sequelize');
const homeHouter = require('./routes/home');
const entranceRouter = require('./routes/entrance');
const outflowRouter  = require('./routes/outflow');
const userRouter  = require('./routes/user');
const authRouter = require('./routes/auth');
const entranceModel = require('./models/ENTRANCE');
const outflowModel = require('./models/OUTFLOW');
const userModel = require('./models/USERS');
const authorization = require('./auth');
const sequelizeConf = require('./config/databaseconf');


const app = express();
app.set( "port", process.env.port || 3001 );
app.set('view engine', 'ejs');
app.use(expressejsLayout);
app.use( bodyParser.json() );

/* passportjs middleware  */ 
 const auth = authorization(app);
 app.use( auth.initialize() );
 app.set("auth", auth);

/*database init and setting these database instances to app*/
const sequelizeInstance = new Sequelize( sequelizeConf.config, {logging: console.log} );

const modelEntrance =  entranceModel(sequelizeInstance, Sequelize);
const modelOutflow =  outflowModel(sequelizeInstance, Sequelize);
const modelUser = userModel(sequelizeInstance, Sequelize);

// associations
modelUser.hasMany(modelOutflow, { foreignKey: { name: 'user', allowNull:false }});
modelUser.hasMany(modelEntrance, { foreignKey: { name: 'user', allowNull:false }});


app.set("datasourceEntrance", modelEntrance);
app.set("datasourceOutflow", modelOutflow);
app.set("datasourceUser", modelUser);

/* Routes initialize */
entranceRouter(app);
outflowRouter(app);
userRouter(app);
homeHouter(app);
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