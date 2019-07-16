module.exports = (sequelize, Datatype) => {
  return sequelize.define('ACCOUNT', {
    
    userid : {
      type: Datatype.INTEGER,
      allowNull: false
    },
    accountid : {
      type: Datatype.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Datatype.STRING,
      allowNull: false
    },
    total: {
      type: Datatype.DOUBLE,
      allowNull: false
    },
    description: {
      type: Datatype.STRING
    }

  });
}