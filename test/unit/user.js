const expect = require('chai').expect;
const User = require('../../controllers/user');

describe("Class: User", ()=> {

  it("Should create an instance of user", ()=>{
    const user = new User(null, "mateus", "Mateus Souza", "password"); 
    return expect(user.user).to.equal("mateus") &&
    expect(user.name).to.equal("Mateus Souza") &&
    expect(user.password).to.equal("password")
  })

});