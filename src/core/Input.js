define([], function() {
  var Input = function() {
    Input.current = this;
    this.keys = {};
    this.init();
  };

  Input.Keys = {
    LEFT: 37,
    RIGHT: 39,
    A: 65,
    D: 68
  };

  Input.prototype.init = function() {
      window.addEventListener('keydown', this.keyDown.bind(this));
      window.addEventListener('keyup', this.keyUp.bind(this));
  };

  Input.prototype.keyDown = function(event) {
    if(!this.keys[event.keyCode]) {
      this.keys[event.keyCode] = new Date().getTime();
    }
  };

  Input.prototype.keyUp = function(event) {
    this.keys[event.keyCode] = false;
  };

  Input.prototype.left = function() {
    return this.keys[Input.Keys.LEFT] ? this.keys[Input.Keys.LEFT] : (this.keys[Input.Keys.A] ? this.keys[Input.Keys.A] : false);
  };

  Input.prototype.right = function() {
    return this.keys[Input.Keys.RIGHT] ? this.keys[Input.Keys.RIGHT] : (this.keys[Input.Keys.D] ? this.keys[Input.Keys.D] : false);
  };

  return Input;
});
