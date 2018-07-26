const _ = require("lodash");

const Rat = function(name){
  this.name = name;
}

Rat.prototype.touchFood = function (food) {
  food.ok = false;
};

module.exports = Rat;
