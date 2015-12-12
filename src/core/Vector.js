define(['pixi'], function(PIXI) {
  var Vector = function(x, y) {
    PIXI.Point.call(this, x, y);
  };

  extend(Vector, PIXI.Point);

  Vector.prototype.len2 = function() {
    return (this.x*this.x) + (this.y*this.y);
  };

  Vector.prototype.len = function() {
    return Math.sqrt(this.len2());
  }

  Vector.prototype.normalize = function(len) {
    len = len || 1;

    this.x = this.x/len;
    this.y = this.y/len;

    return this;
  }

  return Vector;
})
