const supertest = require('supertest');
const expect = require('chai').expect;
const app = require('../../app');
const jwt = require('jwt-simple');



describe("Routes moviments." , () => {

  const request = supertest(app);
  let token;
  let userid;  

  before( done => {  
    const Users = app.get("datasourceUser");
    const Income = app.get("datasourceIncome");
    const Expense = app.get("datasourceExpense")

    Expense.destroy({where: {}, truncate: true})
      .then( () => {
        Income.destroy({where: {}, truncate: true})
            .then( () => { 
              Users.destroy({where: {}, truncate: true})
                .then( () => {
                  Users.create ({
                          user: 'mateussouza',
                          name: 'Mateus Souza',
                          password: '12345',
                      })
                      .then( ( user ) => {
                        token = jwt.encode( {id: user.id} , "2019");
                        userid = user.id;
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

  describe("Route POST /Income", ()=>{

    it("Should create a movement (Income)", ()=>{
      const Income = {
        value: 199,
        account: "85742-9",
        date : "1999-05-05T03:00:00.000Z",
      }
      request.post('/Income').set('Authorization','Bearer ' + token).send(Income).end( (req, res) => {
        const object = res.body;
  
        expect(object.value).to.equal(Income.value) &&
        expect(object.account).to.equal(Income.account) &&
        expect(object.user).to.equal(Income.user) && 
        expect(object.date).to.equal(Income.date)
      } )
    });

    it("Should get a movement (Income)", () => {
      const Income = {
        value: 199,
        account: "85742-9",
        user: userid,
        date : "1999-05-05T03:00:00.000Z"
      }
      request.get('/Income').set('Authorization','Bearer ' + token).send(Income).end( (req, res) => {
        const object = res.body;
        expect(object.value).to.equal(Income.value) &&
        expect(object.account).to.equal(Income.account) &&
        expect(object.user).to.equal(Income.user) && 
        expect(object.date).to.equal(Income.date);
      });
    });

  });


  describe("Route POST /Expense", () => {

    it("Should create a movement (Expense)", ()=>{
      const Expense = {
        value: 199,
        account: "85742-9",
        user: userid,
        date : "1999-05-05T03:00:00.000Z"
      }
      request.post('/Expense').set('Authorization','Bearer ' + token).send(Expense).end( (req, res) => {
        const object = res.body;
        expect(object.value).to.equal(Expense.value) &&
        expect(object.account).to.equal(Expense.account) &&
        expect(object.user).to.equal(Expense.user) && 
        expect(object.date).to.equal(Expense.date);
      } )
    });

  });

  describe("Route GET /Expense", ()=> {
    it("Should get a movement (Expense)", () => {
      const Expense = {
        value: 199,
        account: "85742-9",
        user: userid,
        date : "1999-05-05T03:00:00.000Z"
      }
      request.get('/Expense').set('Authorization','Bearer ' + token).send(Expense).end( (req, res) => {
        const object = res.body;
        expect(object.value).to.equal(Expense.value) &&
        expect(object.account).to.equal(Expense.account) &&
        expect(object.user).to.equal(Expense.user) && 
        expect(object.date).to.equal(Expense.date);
      });
    });
  });

});