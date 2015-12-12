define([
  'game/seeds/Seed',
  'game/plants/DefencePlant'
], function(Seed,
            DefencePlant) {
  var DefenceSeed = function() {
    Seed.call(this);

    var image = new PIXI.Graphics();

    image.beginFill(0xff3300);
    image.drawCircle(0, 0, 2);
    image.endFill();

    this.addChild(image);

    this.plantType = DefencePlant;
  }

  return DefenceSeed;
});
