const expect = require('chai').expect;
const Expense = require('../../controllers/expense');

describe("Class: Expense", () => {

  it("Should create a new Expense instance", ()=> {

    const expense = new Expense(null, 100, "Itau", "User", "today");

    return (
      expect(expense.value).to.equal(100) &&
      expect(expense.account).to.equal("Itau") &&
      expect(expense.user).to.equal("User") &&
      expect(expense.date).to.equal("today")
    );
  });

});