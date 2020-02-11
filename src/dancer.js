// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.nearestNeighbor;

  this.step();
  this.setPosition(this.top, this.left);
};

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  // loop over window.dancers, find the nearest neighbor and set to this.nearestNeighbor
  // should grab distance, xdistance, ydistance
  // xchange = -xdistance/distance * something
  // ychange = -ydistance/distance * something
  var lowestDist = Infinity;
  var dist, xdist, ydist, neighbor;

  if (window.dancers.length) {
    for (var i = 0; i < window.dancers.length; i++) {
      neighbor = window.dancers[i];
      xdist = this.left - neighbor.left;
      ydist = this.top - neighbor.top;
      dist = Math.sqrt((xdist * xdist) + (ydist * ydist));
      // console.log('distance');
      // console.log(dist);
      // check if this is the closest neighbor found so far
      if (dist < lowestDist && dist > 0) {
        lowestDist = dist;
        this.nearestNeighbor = neighbor;
      }
    }
    xdist = this.left - this.nearestNeighbor.left;
    ydist = this.top - this.nearestNeighbor.top;
    dist = Math.sqrt((xdist * xdist) + (ydist * ydist));
    this.top -= 10 * (xdist / dist);
    this.left += 10 * (ydist / dist);
  }
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
