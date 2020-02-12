$(document).ready(function() {
  window.dancers = [];

  $('.addRedButton').on('click', function(event) {
    /*
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    // var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // // get the maker function for the kind of dancer we're supposed to make
    // var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a red dancer with a random position
    var dancer = new RedDancer(
      $('body').height() * (0.8 * Math.random() + 0.1),
      $('body').width() * (0.8 * Math.random() + 0.1),
      (Math.random() * 100) + 50
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  // make a blue dancer with a random position
  $('.addBlueButton').on('click', function(event) {
    var blueDancer = new BlueDancer(
      $('body').height() * (0.8 * Math.random() + 0.1),
      $('body').width() * (0.8 * Math.random() + 0.1),
      (Math.random() * 100) + 50
    );
    $('body').append(blueDancer.$node);
    window.dancers.push(blueDancer);
  });

  // make a green dancer with a random position
  $('.addGreenButton').on('click', function(event) {
    var greenDancer = new GreenDancer(
      $('body').height() * (0.8 * Math.random() + 0.1),
      $('body').width() * (0.8 * Math.random() + 0.1),
      (Math.random() * 100) + 50
    );
    $('body').append(greenDancer.$node);
    window.dancers.push(greenDancer);
  });

  // teleport bubbles left
  $('.leftLineUpButton').on('mousedown', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      var thisDancer = window.dancers[i];
      thisDancer.left = 40;
      thisDancer.setPosition(thisDancer.top, thisDancer.left);
    }
  });

  // teleport bubbles right
  $('.rightLineUpButton').on('mousedown', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      var thisDancer = window.dancers[i];
      thisDancer.left = $('body').width() * 0.9;
      thisDancer.setPosition(thisDancer.top, thisDancer.left);
    }
  });

  // makes mouse repel bubbles
  $(document).on('mousemove', function() {
    for (var i = 0; i < window.dancers.length; i++) {
      // calculate each bubble's distance from mouse
      var thisDancer = window.dancers[i];
      var xdist = thisDancer.left - event.pageX;
      var ydist = thisDancer.top - event.pageY;
      dist = Math.sqrt((xdist * xdist) + (ydist * ydist));

      if (dist < 250) {
        thisDancer.left += thisDancer.speed * (xdist / dist);
        thisDancer.top += thisDancer.speed * (ydist / dist);
        thisDancer.setPosition(thisDancer.top, thisDancer.left);
      }
    }
  });
});