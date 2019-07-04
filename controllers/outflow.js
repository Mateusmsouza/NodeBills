class Outflow {

  constructor(databaseAccess, value, account, user, date, scheduling){
    this.databaseAccess = databaseAccess;
    this.value = value;
    this.account = account;
    this.user = user;
    this.date = date;
    this.scheduling = scheduling;

  }
  
  commitToDatabase(){
    return this.databaseAccess.create(this);
  }

  findAllParam(value, account, user){
    return this.databaseAccess.findAll( {
      where: {
        value: value,
        account: account,
        user: user
        } 
      }
      )
  }
}

module.exports = Outflow;