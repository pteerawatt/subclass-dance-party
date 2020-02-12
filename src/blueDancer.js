var BlueDancer = function(top, left, timeBetweenSteps) {
// blue bubbles
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blue');
  this.speed = 7;
};

BlueDancer.prototype = Object.create(Dancer.prototype);
BlueDancer.prototype.constructor = BlueDancer;

BlueDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};
