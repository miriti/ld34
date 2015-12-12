define(['pixi', 'core/GameObject'], function(PIXI, GameObject) {
  var Hint = function(text, follow) {
    GameObject.call(this);

    this.interactive = false;

    this.follow = follow;
    this.text = new PIXI.Text(text, {fill: "#ffffff", align: "center"});
    this.text.x = -this.text.width / 2;
    this.text.y = -this.text.height / 2;

    this.addChild(this.text);
  }

  extend(Hint, GameObject);

  Hint.prototype.update = function(delta) {
    if(this.follow) {
      if(this.follow.parent == null) {
        this.parent.removeChild(this);
      } else {
        this.x = this.follow.x;
        this.y = this.follow.y - ((this.follow.height - this.height) - 10);
      }
    }

    GameObject.prototype.update.call(this, delta);
  }

  return Hint;
});
