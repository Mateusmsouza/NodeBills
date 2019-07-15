module.exports = (sequelize, Datatype) => {
  
  return sequelize.define('OUTFLOWS', {
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
    }
  });

}