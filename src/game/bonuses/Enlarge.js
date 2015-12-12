define([
  'pixi',
  'game/FallingObject'
], function(PIXI,
            FallingObject) {
  var Enlarge = function() {
    FallingObject.call(this);

    var image = new PIXI.Graphics();
    image.beginFill(0xff8888);
    image.drawCircle(0, 0, 5)
    image.endFill();

    this.addChild(image);

    this.speed = 0.2;
  }

  extend(Enlarge, FallingObject);

  Enlarge.prototype.hit = function(pos) {
    this.planet.radius *= 1.1;
  }

  return Enlarge;
});
