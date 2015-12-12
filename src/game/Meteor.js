define([
  'pixi',
  'game/FallingObject',
  'core/GameObject'
],
function(PIXI,
         FallingObject,
         GameObject) {

  var Trail = function(vector) {
    GameObject.call(this);
    this.vector = vector;

    var image = new PIXI.Graphics();
    image.beginFill(0xffffff);
    image.drawCircle(0,0,1.5);
    image.endFill();

    this.addChild(image);

    this.speed = 0.5;

    this.lifeTime = Trail.LIFE_TIME;
  };

  extend(Trail, GameObject);

  Trail.LIFE_TIME = 1;
  Trail.TIME = 0.05;

  Trail.prototype.update = function(delta) {
    if(this.lifeTime > 0) {
      this.lifeTime -= delta;
      this.scale.set(1+(1-this.lifeTime/Trail.LIFE_TIME)*2);
      this.alpha = (this.lifeTime/Trail.LIFE_TIME);

      GameObject.prototype.update.call(this, delta);
    } else {
      this.parent.removeChild(this);
    }
  }

  var Meteor = function(radius) {
    FallingObject.call(this);

    radius = radius || 3;
    this.radius = radius;

    this.speed = 0.5;

    var image = new PIXI.Graphics();
    image.beginFill(0xeeeeee);
    image.drawRect(-radius, -radius, radius*2, radius*2);
    image.endFill();

    this.addChild(image);

    this._trailTime = Trail.TIME;
  };

  extend(Meteor, FallingObject);

  Meteor.prototype.update = function(delta) {
    this.rotation += Math.PI*4*delta;

    if(this._trailTime <= 0) {
      var trail = new Trail(this.vector);
      trail.x = this.x;
      trail.y = this.y;
      this.parent.addChild(trail);
      this._trailTime = Trail.TIME;
    } else {
      this._trailTime -= delta;
    }

    FallingObject.prototype.update.call(this, delta);
  }

  Meteor.prototype.hit = function(pos) {
    this.planet.getObjects(pos, 10).forEach(function(obj) {
      obj.kill();
    })

    if(this.parent.shake) {
      this.parent.shake();
    }
  }

  return Meteor;
});
