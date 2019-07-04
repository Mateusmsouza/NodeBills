module.exports = (sequelize, Datatype) => {
  
  return sequelize.define('USERS', {
    id: {
      type: Datatype.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user: {
      type: Datatype.STRING,
      allowNull: false
    },
    name: {
      type: Datatype.STRING,
      allowNull: false
    },
    password: {
      type: Datatype.STRING,
      allowNull: false
    },
    createdAt: {
      type: Datatype.DATE,
    }
  });

}