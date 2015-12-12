define([
  'pixi',
  'core/Vector',
  'core/GameObject'],
function(PIXI,
         Vector,
         GameObject) {
  var FallingObject = function() {
    GameObject.call(this);

    this.planet = null;
    this.vector = null;
    this.speed = 1;
    this.radius = 1;
  };

  extend(FallingObject, GameObject);

  FallingObject.prototype.aim = function(planet) {
    this.planet = planet;
    this.vector = new Vector(planet.x - this.x, planet.y - this.y).normalize();
  };

  FallingObject.prototype.update = function(delta) {
    if((this.vector)&&(this.planet)) {
      this.x += this.vector.x * this.speed * delta;
      this.y += this.vector.y * this.speed * delta;

      if(new Vector(this.planet.x - this.x, this.planet.y - this.y).len() <= (this.planet.radius + this.radius)) {
        var pos = (Math.atan2(this.y - this.planet.y, this.x - this.planet.x) - this.planet.rotation) / (Math.PI*2);
        this.hit(pos);
        this.parent.removeChild(this);
      }
    }
    GameObject.prototype.update.call(this, delta);
  };

  FallingObject.prototype.hit = function(pos) {};

  return FallingObject;
});
