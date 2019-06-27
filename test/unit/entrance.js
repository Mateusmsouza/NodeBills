const expect = require('chai').expect;
const Entrance = require('../../controllers/entrance');

describe("Class: entrance", ()=> {

  it('Should create a new entrance instance', ()=> {

    const entrance = new Entrance(1000, "Itau", "User", "today", "");

    return (
              expect(entrance.Value).to.equal(1000) &&
              expect(entrance.Account).to.equal("Itau") &&
              expect(entrance.User).to.equal("User") &&
              expect(entrance.Date).to.equal("today") &&
              expect(entrance.Scheduling).to.equal("") 
            );
  });

  it('Shoud use all setters', () => {
    const entrance = new Entrance(1000, "Itau", "User", "today", "");
    entrance.Value = 2500;
    entrance.Account = "Nubank";
    entrance.User = "AnotherUser";
    entrance.Date = "yesterday";
    entrance.Scheduling = "none";
    return (
      expect(entrance.Value).to.equal(2500) &&
      expect(entrance.Account).to.equal("Nubank") &&
      expect(entrance.User).to.equal("AnotherUser") &&
      expect(entrance.Date).to.equal("yesterday") &&
      expect(entrance.Scheduling).to.equal("none")
      );
  })

});