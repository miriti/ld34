define(['pixi', 'core/GameObject'], function(PIXI, GameObject) {
  var GameMain = function() {
    GameObject.call(this);

    GameMain.current = this;

    this._paused = false;
    this.currentState = null;

    GameMain.current = this;
  };

  extend(GameMain, GameObject);

  Object.defineProperties(GameMain.prototype, {
    paused: {
      get: function() {
        return this._paused;
      },
      set: function(isPaused) {
        console.log(isPaused);
        this._paused = isPaused;
      }
    }
  });

  GameMain.prototype.setState = function(newState) {
    if(this.currentState) {
      this.removeChild(this.currentState);
    }

    this.currentState = newState;
    this.addChild(this.currentState);
  }

  GameMain.prototype.update = function(delta) {
    if(!this.paused) {
      this.super.update.call(this, delta);
    }
  }

  return GameMain;
});
