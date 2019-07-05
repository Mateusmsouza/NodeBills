const supertest = require('supertest');
const expect = require('chai').expect;
const app = require('../../app');
const jwt = require('jwt-simple');

const request = supertest(app);
let token;

beforeEach( () => {
  app.get("datasourceEntrance").destroy({where: {}, truncate:true});
  app.get("datasourceOutflow").destroy({where: {}, truncate:true});
  app.get("datasourceUser").destroy({where : {}, truncate: true});
  
  app.get("datasourceUser").create(
    {
      user: "mateusm",
      name: "Mateus Souza",
      password: "umasenha"
    }
  ).then( user => { console.log("a poorra do user") })
  .catch( error => { console.log(error) }) 
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
    request.post('/Entrance').set('Authorization', `JWT ${token}`).send(Entrance).end( (req, res) => {
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
    request.get('/Entrance').set('Authorization', `JWT ${token}`).send(Entrance).end( (req, res) => {
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
    request.post('/Outflow').set('Authorization', `JWT ${token}`).send(Outflow).end( (req, res) => {
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
    request.get('/Outflow').set('Authorization', `JWT ${token}`).send(Outflow).end( (req, res) => {
      const object = res.body;
      expect(object.value).to.equal(Outflow.value) &&
      expect(object.account).to.equal(Outflow.account) &&
      expect(object.user).to.equal(Outflow.user) && 
      expect(object.date).to.equal(Outflow.date) && 
      expect(object.scheduling).to.equal(Outflow.scheduling);
    });
  });
});