const expect = require('chai').expect;
const User = require('../../controllers/user');

describe("Class: User", ()=> {

  it("Should create an instance of user", ()=>{
    const date = new Date();
    const user = new User("mateus", "Mateus Souza", "password", date ); 
    return expect(user.user).to.equal("mateus") &&
    expect(user.name).to.equal("Mateus Souza") &&
    expect(user.password).to.equal("password") &&
    expect(user.createdAt).to.equal(date);
  })

});