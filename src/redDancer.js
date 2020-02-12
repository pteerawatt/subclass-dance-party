var RedDancer = function(top, left, timeBetweenSteps) {
// red bubbles
  Dancer.call(this, top, left, timeBetweenSteps);
};

RedDancer.prototype = Object.create(Dancer.prototype);
RedDancer.prototype.constructor = RedDancer;

RedDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};
