const supertest = require('supertest');
const expect = require('chai').expect;
const app = require('../../app');
const jwt = require('jwt-simple');



describe("Routes moviments integration test" , () => {

  const request = supertest(app);
  let token;
  let userid;  

  before( done => {  
    const Users = app.get("datasourceUser");
    const Income = app.get("datasourceIncome");
    const Expense = app.get("datasourceExpense");
    const Account = app.get("datasourceAccount");

    Income.destroy({where: {}, truncate: true})
    Expense.destroy({where: {}, truncate: true})
    Account.destroy({where: {}, truncate: true})


    Users.destroy({where: {}, truncate: true})
                  .then( () => {
                    console.log("database reset")
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

                    .catch( error => { console.log( error ) } )
    })
    

  });

  describe("Account switch test", () => {
    it ("[ POST /Account ] Should create a new account", () => {
      
      const account = {
        total: 1500,
        name: "Itau",
        description : "My test"
      }
      request.post("/Account")
              .set('Authorization','Bearer ' + token)
              .send(account)
              .end((err, res) =>{
              if (err) return done(err);
                
              const object = res.body;
              expect(object.total).to.equal(account.total);
              expect(object.name).to.equal(account.name);
              expect(object.description).to.equal(account.description);
              done(res)
            });

    });
  })

  describe("Expense switch test", ()=>{
    it("[ POST /Expense ] Should create a Expense", () => {

      
      const expense = {
        value: 199,
        account: "Itau",
        date: "1999-05-05T03:00:00.000Z"
      }
      
      request.post("/Expense")
              .set('Authorization','Bearer ' + token)
              .send(expense)
              .end((err, res) => {
                if (err) return done(err);
                console.log(res);
                const object1 = res.body;
                expect(object1.value).to.equal("expense.value");
                expect(object1.account).to.equal(expense.account);
                expect(object1.user).to.equal(expense.user);
                expect(object1.date).to.equal(expense.date);
                done(req)
              })
    })
  })

});