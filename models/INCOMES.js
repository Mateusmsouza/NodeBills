module.exports = (sequelize, Datatype) => {
  
  return sequelize.define('INCOME', {
    
    account: {
      type: Datatype.INTEGER,
      primaryKey: true
      
    },
    value: {
      type: Datatype.DOUBLE,
      primaryKey: true
    },
    date: {
      type: Datatype.DATE,
      primaryKey: true
    }
  });

}