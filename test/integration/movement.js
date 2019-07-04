const supertest = require('supertest');
const expect = require('chai').expect;
const app = require('../../app');

const request = supertest(app);

beforeEach( () => {
  app.get("datasourceEntrance").destroy({where: {}, truncate:true});
  app.get("datasourceOutflow").destroy({where: {}, truncate:true});
});

describe("Route POST /Entrance", ()=>{

  it("Should create a movement (Entrance)", ()=>{
    const Entrance = {
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

describe("Route GET /Entrance", ()=> {
  it("Should get a movement (Entrance)", () => {
    const Entrance = {
      value: 199,
      account: "85742-9",
      user: "Mateus",
      date : "05/05/1999",
      scheduling : ""
    }
    request.get('/Entrance').send(Entrance).end( (req, res) => {
      const object = res.body;
      expect(object.value).to.equal(Entrance.value) &&
      expect(object.account).to.equal(Entrance.account) &&
      expect(object.user).to.equal(Entrance.user) && 
      expect(object.date).to.equal(Entrance.date) && 
      expect(object.scheduling).to.equal(Entrance.scheduling);
    });
  });
});

describe("Route POST /Outflow", () => {

  it("Should create a movement (Outflow)", ()=>{
    const Outflow = {
      value: 199,
      account: "85742-9",
      user: "Mateus",
      date : "05/05/1999",
      scheduling : ""
    }
    request.post('/Outflow').send(Outflow).end( (req, res) => {
      const object = res.body;
      expect(object.value).to.equal(Outflow.value) &&
      expect(object.account).to.equal(Outflow.account) &&
      expect(object.user).to.equal(Outflow.user) && 
      expect(object.date).to.equal(Outflow.date) && 
      expect(object.scheduling).to.equal(Outflow.scheduling);
    } )
  });

});

describe("Route GET /Outflow", ()=> {
  it("Should get a movement (Outflow)", () => {
    const Outflow = {
      value: 199,
      account: "85742-9",
      user: "Mateus",
      date : "05/05/1999",
      scheduling : ""
    }
    request.get('/Outflow').send(Outflow).end( (req, res) => {
      const object = res.body;
      expect(object.value).to.equal(Outflow.value) &&
      expect(object.account).to.equal(Outflow.account) &&
      expect(object.user).to.equal(Outflow.user) && 
      expect(object.date).to.equal(Outflow.date) && 
      expect(object.scheduling).to.equal(Outflow.scheduling);
    });
  });
});