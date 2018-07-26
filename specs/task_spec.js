const assert = require("assert");
const Task = require("../task.js");

describe("Task", function(){
  let task1, task2, task3;

  beforeEach(function(){
    task1 = new Task(1, 1, "sense of accomplishment", false);
    task2 = new Task(5, 3, "gold", false);
    task3 = new Task(10, 5, "shiny gems", false)
  });

  it("should have difficulty level", function(){
    assert.strictEqual(1, task1.difficulty);
  })

  it("should have urgency level", function(){
    assert.strictEqual(1, task1.urgency);
  })

  it("should have difficulty level", function(){
    assert.strictEqual("gold", task2.reward);
  })

  it("should start uncompleted", function(){
    assert.strictEqual(false, task2.status);
  })

  it("should change to true when completed", function(){
    task1.completeTask();
    assert.strictEqual(true, task1.status);
  })
})
