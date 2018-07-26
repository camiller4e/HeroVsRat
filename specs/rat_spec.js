const assert = require("assert");
const Rat = require("../rat")
const Hero = require("../hero");
const Task = require("../task");
const Food = require("../food");

describe("Rat", function(){
  let rat, link, potato;

  beforeEach(function(){
    rat = new Rat("Jerry");
    link = new Hero("Link", 20, potato);
    potato = new Food("potato", 5, true);
  })


  it("should be able to touch/poison food", function(){
    rat.touchFood(potato);
    assert.strictEqual(false, potato.ok);
  })
})
