var makeGreenDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$newNode = $('<span class="green"></span>');
  this.$node.addClass('green');
  // this.$node.addClass('bounce');
  // this.cd $node.removeClass('dancer');

};

makeGreenDancer.prototype = Object.create(makeDancer.prototype);
makeGreenDancer.prototype.constructor = makeGreenDancer;

makeGreenDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  // this.$node.toggle();

  // random movement
  // this.setPosition($("body").height() * (0.8*Math.random() + 0.1),
  // $("body").width() * (0.8*Math.random() + 0.1));
};
