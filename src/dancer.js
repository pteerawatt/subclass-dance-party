// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.nearestNeighbor;
  this.speed = 10;

  this.step();
  this.setPosition(this.top, this.left);
};

makeDancer.prototype.step = function() {
// loop over window.dancers, find the nearest neighbor and set to this.nearestNeighbor
  var lowestDist = Infinity;
  var dist, xdist, ydist, neighbor;

  if (window.dancers.length > 1) {
  // needs more than one bubble
    for (var i = 0; i < window.dancers.length; i++) {
      neighbor = window.dancers[i];
      xdist = this.left - neighbor.left;
      ydist = this.top - neighbor.top;
      dist = Math.sqrt((xdist * xdist) + (ydist * ydist));

      // check if this is the closest neighbor found so far
      if (dist < lowestDist && dist > 0) {
        lowestDist = dist;
        this.nearestNeighbor = neighbor;
      }
    }
    // calculate movement update
    xdist = this.left - this.nearestNeighbor.left;
    ydist = this.top - this.nearestNeighbor.top;
    dist = Math.sqrt((xdist * xdist) + (ydist * ydist));
    this.top -= this.speed * (xdist / dist);
    this.left += this.speed * (ydist / dist);
  }

  // enforce borders
  if (this.top > $("body").height() * 0.8) {
    this.top = $("body").height() * 0.8;
  }
  if (this.top < $("body").height() * 0.1) {
    this.top = $("body").height() * 0.1;
  }
  if (this.left > $("body").width() * 0.9) {
    this.left = $("body").width() * 0.9;
  }
  if (this.left < $("body").width() * 0.05) {
    this.left = $("body").width() * 0.05;
  }

  // update positions
  this.setPosition(this.top, this.left);
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
