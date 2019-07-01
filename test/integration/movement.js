const supertest = require('supertest');
const expect = require('chai').expect;
const app = require('../../app');

const request = supertest(app);

describe("Route POST /Entrance", ()=>{

  it("Should create a movement (Entrance)", ()=>{
    const Entrance = {
      //value, account, user, date, scheduling
      value: 199,
      account: "85742-9",
      user: "Mateus",
      date : "05/05/1999",
      scheduling : ""
    }
    request.post('/Entrance').send(Entrance).end( (req, res) => {
      const object = res.body;
      expect(object.value).to.equal(Entrance.value) &&
      expect(object.account).to.equal(Entrance.account) &&
      expect(object.user).to.equal(Entrance.user) && 
      expect(object.date).to.equal(Entrance.date) && 
      expect(object.scheduling).to.equal(Entrance.scheduling);
    } )
  });

});