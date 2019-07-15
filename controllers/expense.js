class Expense {

  constructor(databaseAccess, value, account, user, date){
    this.databaseAccess = databaseAccess;
    this.value = value;
    this.account = account;
    this.user = user;
    this.date = date;
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

module.exports = Expense;