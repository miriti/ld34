define(['pixi',
        'game/PlanetObject'],
function(PIXI,
         PlanetObject) {
  var Plant = function() {
    PlanetObject.call(this);

    this.growTime = 10;
  };

  extend(Plant, PlanetObject);

  Plant.prototype.kill = function() {
    this.parent.removeChild(this);
  }

  Plant.prototype.update = function(delta) {
    PlanetObject.prototype.update.call(this, delta);
  }

  return Plant;
});
