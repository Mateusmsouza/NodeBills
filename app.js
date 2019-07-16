const express = require('express');
const expressejsLayout = require('express-ejs-layouts');
const bodyParser = require ('body-parser');
const Sequelize = require('sequelize');
const authorization = require('./auth');
const sequelizeConf = require('./config/databaseconf');

// router imports
const homeHouter = require('./routes/home');
const IncomeRouter = require('./routes/income');
const expenseRouter  = require('./routes/expense');
const userRouter  = require('./routes/user');
const authRouter = require('./routes/auth');
const accountRouter = require('./routes/account');

// model imports
const incomeModel = require('./models/INCOMES');
const expenseModel = require('./models/EXPENSES');
const userModel = require('./models/USERS');
const accountModel = require('./models/ACCOUNTS');



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

const modelUser = userModel(sequelizeInstance, Sequelize);
const modelAccount = accountModel(sequelizeInstance, Sequelize);
const modelIncome =  incomeModel(sequelizeInstance, Sequelize);
const modelExpense =  expenseModel(sequelizeInstance, Sequelize);



// associations
modelUser.hasMany(modelAccount, { foreignKey: { name: 'userid', allowNull:false}});

modelIncome.belongsTo(modelAccount, {as: 'IncAccountFather', foreignKey:'account'});

modelExpense.belongsTo(modelAccount, {as: 'ExAccountFather', foreignKey:'account'});



app.set("datasourceIncome", modelIncome);
app.set("datasourceExpense", modelExpense);
app.set("datasourceUser", modelUser);
app.set("datasourceAccount", modelAccount);

/* Routes initialize */
IncomeRouter(app);
expenseRouter(app);
userRouter(app);
accountRouter(app);
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