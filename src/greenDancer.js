var makeGreenDancer = function(top, left, timeBetweenSteps) {
// green bubbles
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('green');
  this.speed = 5;
};

makeGreenDancer.prototype = Object.create(makeDancer.prototype);
makeGreenDancer.prototype.constructor = makeGreenDancer;

makeGreenDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};
