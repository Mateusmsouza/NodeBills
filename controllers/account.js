class Account {
  constructor(databaseAccess, userId, name, total, description){
    this.databaseAccess = databaseAccess;
    this.userId = userId,
    this.name = name,
    this.total = total,
    this.description = description
  }
}
module.exports = Account;