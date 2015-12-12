define([
  'pixi',
  'core/GameObject'
], function(PIXI,
            GameObject) {
  var Sun = function(planet) {
    GameObject.call(this);

    var core = new PIXI.Graphics();
    core.beginFill(0xffff00);
    core.drawCircle(0, 0, 300);
    core.endFill();

    this.addChild(core);

    this.planet = planet;
    this.phase = 0;
  }

  extend(Sun, GameObject);

  Sun.prototype.update = function(delta) {
    this.x = this.planet.x + Math.cos(this.phase) * 550;
    this.y = this.planet.y + Math.sin(this.phase) * 550;

    this.phase += Math.PI / 20 * delta;

    GameObject.prototype.update.call(this, delta);
  }

  return Sun;
})
