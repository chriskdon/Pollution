(function () {
  'use strict';

  var excludes = Object.keys(window).concat(['pollution']);

  var pollution = {}; // Main namespace

  function subtract(a, b) {
    return a.filter(function (i) {
      return b.indexOf(i) < 0;
    });
  }

  function getExcludes() {
    return excludes;
  }

  pollution.get = function (excludes) {
    excludes = excludes || [];
    return subtract(Object.keys(window), getExcludes().concat(excludes));
  };

  pollution.check = function (excludes) {
    var pollutants = pollution.get(excludes);

    console.log("Pollutants\n---------------\n");
    console.log(pollutants);
  };

  // Exports
  window.pollution = pollution;
})();