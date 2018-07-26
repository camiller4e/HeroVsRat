const assert = require("assert");
const Food = require("../food");

describe("Food", function(){
  let potato, cheese, arepas;

  beforeEach(function(){
    potato = new Food("potato", 5, true);
    cheese = new Food("cheese", 3, true);
    arepas = new Food("arepas", 10, true);
  })

  it("should have a name", function(){
    assert.strictEqual("potato", potato.name);
  })

  it("should have a value", function(){
    assert.strictEqual(5, potato.value);
  })


});
