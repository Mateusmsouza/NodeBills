module.exports = (sequelize, Datatype) => {
  return sequelize.define('ACCOUNTS', {
    
    userId : {
      type: Datatype.INTEGER,
      primaryKey: true
    },
    name: {
      type: Datatype.STRING,
      primaryKey: true
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