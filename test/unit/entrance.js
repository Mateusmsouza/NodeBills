const expect = require('chai').expect;
const Income = require('../../controllers/income');

describe("Class: Income", ()=> {

  it('Should create a new income instance', ()=> {

    const income = new Income(null, 1000, "Itau", "User", "today");

    return (
              expect(income.value).to.equal(1000) &&
              expect(income.account).to.equal("Itau") &&
              expect(income.user).to.equal("User") &&
              expect(income.date).to.equal("today")
            );
  });
});