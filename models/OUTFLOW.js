module.exports = (sequelize, Datatype) => {
  
  return sequelize.define('OUTFLOW', {
    value: {
      type: Datatype.DOUBLE,
      allowNull: false
    },
    account: {
      type: Datatype.STRING,
      allowNull: false
      
    },
    user: {
      type: Datatype.STRING,
      primaryKey: true,
      allowNull: false
    },
    date: {
      type: Datatype.DATE,
      primaryKey: true
    },
    scheduling: {
      type: Datatype.DATE, 
      primaryKey: true
    }
  });

}