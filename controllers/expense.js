class Expense {

  constructor(databaseAccess, value, account, date){
    this.databaseAccess = databaseAccess;
    this.value = value;
    this.account = account;
    this.date = date;
  }
  
  commitToDatabase(){
    return this.databaseAccess.create(this);
  }

  findAllParam(){
    return this.databaseAccess.findAll( {
      where: {
        
        } 
      }
      )
  }
}

module.exports = Expense;