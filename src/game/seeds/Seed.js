define([
  'pixi',
  'game/FallingObject',
  'game/plants/Plant'
],
function(PIXI,
         FallingObject,
         Plant) {
  var Seed = function() {
    FallingObject.call(this);

    this.vector = new PIXI.Point();
    this.speed = 0.2;
    this.plantType = null;
  }

  extend(Seed, FallingObject);

  Seed.prototype.hit = function(pos) {
    if(this.plantType) {
      var plant = new this.plantType();

      plant.putOnPlanet(this.planet, pos);
      this.planted(plant);
    }
  };

  Seed.prototype.planted = function(plant){};

  return Seed;
});
