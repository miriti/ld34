define([
  'game/PlanetObject'
],
function(PlanetObject) {
  var HoverObject = function() {
    PlanetObject.call(this);

    this._altitude = 0;
  };

  extend(HoverObject, PlanetObject);

  Object.defineProperties(HoverObject.prototype, {
    altitude: {
      get: function() {
        return this._altitude;
      },
      set: function(newAltitude) {
        this._altitude = newAltitude;
      }
    }
  });

  return HoverObject;
});
