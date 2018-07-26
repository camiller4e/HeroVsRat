const assert = require("assert");
const Hero = require("../hero");
const Task = require("../task");
const Food = require("../food");
const Rat = require("../rat")

describe("Hero", function(){
  let link, cat, osho, rat;

  beforeEach(function(){
    task1 = new Task(1, 6, "sense of accomplishment", false);
    task2 = new Task(10, 3, "gold", false);
    task3 = new Task(5, 5, "shiny gems", false)

    potato = new Food("potato", 5, true);
    cheese = new Food("cheese", 3, true);
    arepas = new Food("arepas", 10, true);

    link = new Hero("Link", 20, potato);
    cat = new Hero("Cat", 10, cheese);
    osho = new Hero("Osho", 50, arepas);

    rat = new Rat("Jerry");

  })

  it("should have a name", function(){
    assert.strictEqual("Osho", osho.name);
  })

  it("should have a favourite food", function(){
    assert.strictEqual(arepas, osho.favFood);
  })

  it("should have health value", function(){
    assert.strictEqual(50, osho.health);
  })

  it("should be able to talk", function(){
    assert.strictEqual("My name is Osho", osho.talk());
  })

  it("should be able to eat", function(){
    osho.eat(potato);
    assert.strictEqual(55, osho.health);
  })

  it("should heal more from favourite food", function(){
    osho.eat(arepas);
    assert.strictEqual(65, osho.health);
  })

  it("should be able to add tasks", function(){
    osho.addTask(task1);
    const expected = 1;
    const actual = osho.tasks.length
    assert.deepStrictEqual(expected, actual);
  })

  it("should be able to sort tasks by property", function(){
    osho.addTask(task1);
    osho.addTask(task2);
    osho.addTask(task3);
    const expected = [task1, task3, task2]
    const actual = osho.sortTasksBy("difficulty");
    assert.deepStrictEqual(expected, actual);
  })

  it("should get completed tasks", function(){
    osho.addTask(task1);
    osho.addTask(task2);
    osho.addTask(task3);
    task1.completeTask();
    const expected = [task1];
    const actual = osho.getTasks(true);
    assert.deepStrictEqual(expected, actual);
  })

  it("should get uncompleted tasks", function(){
    osho.addTask(task1);
    osho.addTask(task2);
    osho.addTask(task3);
    task1.completeTask();
    const expected = [task2, task3];
    const actual = osho.getTasks(false);
    assert.deepStrictEqual(expected, actual);
  })

  it("should get poisoned by bad food", function(){
    rat.touchFood(potato);
    link.eat(potato);
    assert.strictEqual(15, link.health);
  })


});
