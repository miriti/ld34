define([
  'pixi',
  'core/GameObject',
  'game/PlanetObject'
],
function(PIXI,
         GameObject,
         PlanetObject) {
  var Planet = function(radius) {
    GameObject.call(this);

    this.objects = [];

    this._radius = 0;
    this.radius = radius;
  };

  extend(Planet, GameObject);

  Object.defineProperties(Planet.prototype, {
    radius: {
      get: function() {
        return this._radius;
      },
      set: function(newRadius) {
        this._radius = newRadius;

        this.refreshImage();

        this.objects.forEach(function(object) {
          var a = (Math.PI * 2) * object.planetPosition;

          object.x = Math.cos(a) * this._radius;
          object.y = Math.sin(a) * this._radius;

          object.rotation = a - Math.PI/2;

          // TODO: DRY
        }, this);
      }
    },
    circumference: {
      get: function() {
        return (Math.PI * 2) * this.radius;
      }
    }
  });

  Planet.prototype.refreshImage = function() {
    if(this.image) {
      this.removeChild(this.image);
    }

    this.image = new PIXI.Graphics();
    this.image.beginFill(0x00aaff);
    this.image.drawCircle(0, 0, this._radius);
    this.image.endFill();

    this.addChildAt(this.image, 0);
  }

  /**
   * @param object
   * @param at 0.0 .. 1.0
   */
  Planet.prototype.putObject = function(object, at) {
    var a = (Math.PI * 2) * at;

    object.x = Math.cos(a) * this._radius;
    object.y = Math.sin(a) * this._radius;

    object.rotation = a - Math.PI/2;

    this.addChild(object);

    this.objects.push(object);
  };

  Planet.prototype.getObjects = function(pos, range) {
    var circRange = range/this.circumference;

    var selected = this.objects.filter(function(obj) {
      return (Math.abs(obj.planetPosition - pos) <= circRange);
    });

    return selected;
  }

  Planet.prototype.removeChild = function(child) {
    GameObject.prototype.removeChild.call(this, child);

    if(child instanceof PlanetObject) {
      var index = this.objects.indexOf(child);

      if(index !== -1) {
        this.objects.splice(index, 1);
      }
    }
  }

  return Planet;
});
