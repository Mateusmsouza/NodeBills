const expect = require('chai').expect;
const Outflow = require('../../controllers/outflow');

describe("Class: Outflow", () => {

  it("Should create a new outflow instance", ()=> {

    const outflow = new Outflow(100, "Itau", "User", "today", "");

    return (
      expect(outflow.Value).to.equal(100) &&
      expect(outflow.Account).to.equal("Itau") &&
      expect(outflow.User).to.equal("User") &&
      expect(outflow.Date).to.equal("today") &&
      expect(outflow.Scheduling).to.equal("") 
    );
  });

  it('Shoud use all setters', () => {
    const outflow = new Outflow(100, "Itau", "User", "today", "");
    outflow.Value = 2500;
    outflow.Account = "Nubank";
    outflow.User = "AnotherUser";
    outflow.Date = "yesterday";
    outflow.Scheduling = "none";
    return (
      expect(outflow.Value).to.equal(2500) &&
      expect(outflow.Account).to.equal("Nubank") &&
      expect(outflow.User).to.equal("AnotherUser") &&
      expect(outflow.Date).to.equal("yesterday") &&
      expect(outflow.Scheduling).to.equal("none")
      );
  })

});