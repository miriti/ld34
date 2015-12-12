define(['pixi'], function(PIXI) {
  var GameObject = function() {
    PIXI.Container.call(this);

    this.interactive = true;

    this.tweens = [];
  };

  extend(GameObject, PIXI.Container);

  GameObject.prototype.update = function(delta) {
    this.tweens.forEach(function(tween) {
      
    }, this);

    for(var i in this.children) {
      if(this.children[i]['update']) {
        this.children[i].update(delta);
      }
    }
  };

  return GameObject;
});
