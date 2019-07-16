const expect = require('chai').expect;
const Account = require('../../controllers/account');


describe("Class: Account", ()=> {

  it('Should create a new account instance', ()=> {

    const account = new Account(null, 1, "Nubank", 1500, "");

    return (
              expect(account.userid).to.equal(1) &&
              expect(account.name).to.equal("Nubank") &&
              expect(account.total).to.equal(1500) &&
              expect(account.description).to.equal("")
            );
  });
});