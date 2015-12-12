define(['core/GameObject'], function(GameObject) {
  var PlanetObject = function() {
    GameObject.call(this);

    this._planetPosition = 0;
    this.planet = null;
  };

  extend(PlanetObject, GameObject);

  Object.defineProperties(PlanetObject.prototype, {
    planetPosition: {
      get: function() {
        return this._planetPosition;
      },
      set: function(val) {
        this._planetPosition = val;
      }
    }
  });

  PlanetObject.prototype.putOnPlanet = function(planet, pos) {
    this.planet = planet;
    this.planetPosition = pos;
    
    planet.putObject(this, pos);
  }

  return PlanetObject;
})
