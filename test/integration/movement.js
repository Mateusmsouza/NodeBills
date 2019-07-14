const supertest = require('supertest');
const expect = require('chai').expect;
const app = require('../../app');
const jwt = require('jwt-simple');



describe("Routes moviments." , () => {

  const request = supertest(app);
  let token;
    
  before( done => {  
    const Users = app.get("datasourceUser");
    const Entrance = app.get("datasourceEntrance");
    const Outflow = app.get("datasourceOutflow")

    Outflow.destroy({where: {}, truncate: true})
      .then( () => {
          Entrance.destroy({where: {}, truncate: true})
            .then( () => { 
              Users.destroy({where: {}, truncate: true})
                .then( () => {
                  Users.create ({
                          user: 'mateussouza',
                          name: 'Mateus Souza',
                          password: '12345',
                      })
                      .then( () => {
                        done();
                      })
                      .catch( error => { console.log( error ) } )
                } )
                .catch( error => { console.log( error ) } )
            }
              )
            .catch( error => { console.log( error ) } )
      } )
      .catch( error => { console.log( error )})

  });

  describe("Route POST /Entrance", ()=>{

    it("Should create a movement (Entrance)", ()=>{
      const Entrance = {
        value: 199,
        account: "85742-9",
        user: "Mateus",
        date : "1999-05-05T03:00:00.000Z",
        scheduling : ""
      }
      request.post('/Entrance').send(Entrance).end( (req, res) => {
        const object = res.body;
        console.log(res.status)
        expect(object.value).to.equal(Entrance.value) &&
        expect(object.account).to.equal(Entrance.account) &&
        expect(object.user).to.equal(Entrance.user) && 
        expect(object.date).to.equal(Entrance.date) && 
        expect(object.scheduling).to.equal(Entrance.scheduling);
      } )
    });

    it("Should get a movement (Entrance)", () => {
      const Entrance = {
        value: 199,
        account: "85742-9",
        user: "Mateus",
        date : "1999-05-05T03:00:00.000Z",
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

//  describe("Route GET /Entrance", ()=> {
    
//  });

  describe("Route POST /Outflow", () => {

    it("Should create a movement (Outflow)", ()=>{
      const Outflow = {
        value: 199,
        account: "85742-9",
        user: "Mateus",
        date : "1999-05-05T03:00:00.000Z",
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
        date : "1999-05-05T03:00:00.000Z",
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

});