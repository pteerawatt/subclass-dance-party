var makeBouncyDancer = function(top, left, timeBetweenSteps) {
// blue bubbles
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blue');
  this.speed = 7;
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;

makeBouncyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};
