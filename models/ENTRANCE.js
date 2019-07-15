module.exports = (sequelize, Datatype) => {
  
  return sequelize.define('ENTRANCES', {
    value: {
      type: Datatype.DOUBLE,
      allowNull: false
    },
    account: {
      type: Datatype.STRING,
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