var RedDancer = function(top, left, timeBetweenSteps) {
// red bubbles
  Dancer.call(this, top, left, timeBetweenSteps);
  this.mainColor = 'red';
  this.invertedColor = 'aqua';
  this.$node.addClass(this.mainColor);
};

RedDancer.prototype = Object.create(Dancer.prototype);
RedDancer.prototype.constructor = RedDancer;

RedDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};
