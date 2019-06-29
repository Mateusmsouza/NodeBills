const supertest = require('supertest');
const expect = require('chai').expect;
const app = require('../../app');

const request = supertest(app);

describe("Route /createMovement", ()=>{

  it("Should create a movement (Entrance)", ()=>{
    const Entrance = {
      //value, account, user, date, scheduling
      value: 199,
      account: "85742-9",
      user: "Mateus",
      date : "05/05/1999",
      scheduling : ""
    }
    request.post('/createEntrance').send(Entrance).end( (req, res) => {
      const object = res.body;
      expect(object._value).to.equal(Entrance.value) &&
      expect(object._account).to.equal(Entrance.account) &&
      expect(object._user).to.equal(Entrance.user) && 
      expect(object._date).to.equal(Entrance.date) && 
      expect(object._scheduling).to.equal(Entrance.scheduling);
    } )
  });

});