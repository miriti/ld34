define(['game/plants/Plant'], function(Plant) {
  var EnergyPlant = function() {
    Plant.call(this);

    var image = new PIXI.Graphics();
    image.beginFill(0x00ff33);
    image.drawRect(-1, 0, 2, 1);
    image.endFill();

    this.addChild(image);

    this.top = image;

    var roots = new PIXI.Graphics();
    roots.beginFill(0xcc0000);
    roots.drawRect(-1, 0, 2, -1);
    roots.endFill();

    this.roots = roots;

    this.addChild(roots);
  }

  extend(EnergyPlant, Plant);

  EnergyPlant.prototype.update = function(delta) {
    Plant.prototype.update.call(this, delta);

    this.top.scale.y += delta;
    this.roots.scale.y += delta/2;
  }

  return EnergyPlant;
});
