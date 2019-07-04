class User {
  constructor(databaseAccess, user, name, password){
    this.databaseAccess = databaseAccess;
    this.user = user,
    this.name = name,
    this.password = password
    this.createdAt = new Date()
  }

  commitToDatabase(){
    return this.databaseAccess.create(this);
  }

  findAllParam(user, name, password){
    return this.databaseAccess.findAll( 
      {
      where: {
        user: user,
        name: name,
        password: password
        } 
      }
    )
  }
  
  findById(id){
    return this.databaseAccess.findOne({
      where : {
        id: id
      }
    })
  }
}

module.exports = User;