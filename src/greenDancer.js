var GreenDancer = function(top, left, timeBetweenSteps) {
// green bubbles
  Dancer.call(this, top, left, timeBetweenSteps);
  this.mainColor = 'green';
  this.invertedColor = 'magenta';
  this.$node.addClass(this.mainColor);
  this.speed = 5;
};

GreenDancer.prototype = Object.create(Dancer.prototype);
GreenDancer.prototype.constructor = GreenDancer;

GreenDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};
