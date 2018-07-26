const _ = require("lodash");

const Food = function(name, value, ok){
  this.name = name;
  this.value = value;
  this.ok = ok;
}

module.exports = Food;
