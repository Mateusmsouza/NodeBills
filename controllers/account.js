class Account {
  constructor(databaseAccess, userid, name, total, description){
    this.databaseAccess = databaseAccess;
    this.userid = userid,
    this.name = name,
    this.total = total,
    this.description = description
  }

  commitToDatabase(){
    return this.databaseAccess.create(this);
  }
}
module.exports = Account;