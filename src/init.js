$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
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

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * (0.8*Math.random() + 0.1),
      $("body").width() * (0.8*Math.random() + 0.1),
      (Math.random() * 100) + 50
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.addBouncyButton').on('click', function(event) {
    // make a bouncy dancer with a random position
    var bouncyDancer = new makeBouncyDancer(
      $("body").height() * (0.8*Math.random() + 0.1),
      $("body").width() * (0.8*Math.random() + 0.1),
      (Math.random() * 100) + 50
    );
    $('body').append(bouncyDancer.$node);
    window.dancers.push(bouncyDancer);
  });

  $('.addGreenButton').on('click', function(event) {
    // make a green dancer with a random position
    var greenDancer = new makeGreenDancer(
      $("body").height() * (0.8*Math.random() + 0.1),
      $("body").width() * (0.8*Math.random() + 0.1),
      (Math.random() * 100) + 50
    );
    $('body').append(greenDancer.$node);
    window.dancers.push(greenDancer);
  });

  $('.addLineUpButton').on('click', function(event) {
    // make dancers line up
    for (var i = 0; i < window.dancers.length; i++) {
      var thisDancer = window.dancers[i];
      thisDancer.setPosition(thisDancer.top, 40);
    }
  });

});