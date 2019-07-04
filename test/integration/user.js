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

    request.post('/user').send(user).end( (req, res)=>{
      return expect(res.body.user).to.equal(user.user) &&
      expect(res.body.name).to.equal(user.name) &&
      expect(res.body.password).to.equal(user.password)
    });
    
  });

  it("Should get a user", () => {
    const user = {
      user: "mateusm",
      name: "Mateus Souza",
      password: "umasenha"
    };

    request.get('/user').send(user).end( (req, res)=>{
      return expect(res.body.user).to.equal(user.user) &&
      expect(res.body.name).to.equal(user.name) &&
      expect(res.body.password).to.equal(user.password)
    });
  })
});