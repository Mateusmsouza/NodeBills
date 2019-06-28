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
      expect((res.body)).to.equal((Entrance));

    } )
  });

});