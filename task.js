const _ = require("lodash");

const Task = function(difficulty, urgency, reward, status){
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.status = status;
}

Task.prototype.completeTask = function () {
  this.status = true;
};

module.exports = Task;
