const supertest = require('supertest');
const expect = require('chai').expect;
const app = require('../../app');

const request = supertest(app);

describe("Route POST /user", () => {

  it("Should create a new user", ()=> {
    const user = {
      user: "mateusm",
      name: "Mateus Souza",
      password: "umasenha"
    };

    return request.post('/user')
          .send(user)
          .expect(200)
          .then( response => {
            expect(response.body.user).to.equal(user.user)
            expect(response.body.name).to.equal(user.name)
            expect(response.body.password).to.equal(user.password)
          })
  });

  it("Should get a user", () => {
    const user = {
      user: "mateusm",
      name: "Mateus Souza",
      password: "umasenha"
    };

    return request.get('/user')
            .send(user)
            .expect(200)
            .then( res => {
              const response = res.body;
              expect(response[0].user).to.equal(user.user)
              expect(response[0].name).to.equal(user.name)
              expect(response[0].password).to.equal(user.password)
            } )
      
    
  })
});