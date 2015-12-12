define([
  'game/seeds/Seed',
  'game/plants/EnergyPlant'
],
function(Seed,
         EnergyPlant) {
  var EnergySeed = function() {
    Seed.call(this);

    var image = new PIXI.Graphics();

    image.beginFill(0xaaff10);
    image.drawCircle(0, 0, 2);
    image.endFill();

    this.addChild(image);

    this.plantType = EnergyPlant;
  }

  extend(EnergySeed, Seed);

  return EnergySeed;
});
