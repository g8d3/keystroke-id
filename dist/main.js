(function() {
  this.kid = function(el, opts) {
    if (opts == null) {
      opts = {};
    }
    el.kid = {
      dwells: [],
      flights: [],
      all: []
    };
    el.kid.clear = function() {
      var _ref;
      return _ref = [[], [], [], null], this.dwells = _ref[0], this.flights = _ref[1], this.all = _ref[2], this.lastStrokedAt = _ref[3], _ref;
    };
    el.addEventListener('keydown', function() {
      el.kid.flights.push([String.fromCharCode(event.keyCode), Date.now() - (el.kid.lastStrokedAt || Date.now())]);
      el.kid.all.push([String.fromCharCode(event.keyCode) + 'Dw', Date.now() - (el.kid.lastStrokedAt || Date.now())]);
      return el.kid.lastStrokedAt = Date.now();
    });
    return el.addEventListener('keyup', function() {
      el.kid.dwells.push([String.fromCharCode(event.keyCode), Date.now() - (el.kid.lastStrokedAt || Date.now())]);
      el.kid.all.push([String.fromCharCode(event.keyCode) + 'Up', Date.now() - (el.kid.lastStrokedAt || Date.now())]);
      return el.kid.lastStrokedAt = Date.now();
    });
  };

}).call(this);
