const _ = require("lodash");

const Hero = function(name, health, favFood){
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.tasks = [];
}

Hero.prototype.talk = function(){
  return "My name is " + this.name;
}

Hero.prototype.eat = function(food){
  if (food.ok === false){
    this.health -= 5;
  } else if(food === this.favFood){
    this.health += food.value * 1.5;
  } else {
    this.health += food.value;
  }
};

Hero.prototype.addTask = function(task){
  this.tasks.push(task);
}

Hero.prototype.sortTasksBy = function (property) {
  return _.sortBy(this.tasks, property)
};

Hero.prototype.getTasks = function (boolean) {
  return this.tasks.filter(function(task){
    if(task.status === boolean){
      return task;
    }
  })
};

module.exports = Hero;
