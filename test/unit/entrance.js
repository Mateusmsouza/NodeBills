//import chai from 'chai';
//import entrance from '../../controllers/entrance.js'
const expect = require('chai').expect;
const entrance = require('../../controllers/entrance.js');

describe("Class: entrance", ()=> {

  it('Should create a new entrance instance', ()=> {

    const Entrance = new entrance(1000, "Itau", "User", "today", "");

    return (
              expect(Entrance.Value).to.equal(1000) &&
              expect(Entrance.Account).to.equal("Itau") &&
              expect(Entrance.User).to.equal("User") &&
              expect(Entrance.Scheduling).to.equal("") 
            );
  });

  it('Shoud alter the value of the instance', () => {
    const Entrance = new entrance(1000, "Itau", "User", "today", "");
    Entrance.Value = 2500;
    return expect(Entrance.Value).to.equal(2500);
  })

});