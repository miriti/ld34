define([], function() {
  var Tween = function(duration, func, action) {
    this.duration = duration;
    this.time = 0;
    this.func = func || Tween.LINIAR;
    this.action = action;
    this.finished = false;
  };

  Tween.LINIAR = function(t) {
    return t;
  };

  Tween.SINE = function(t) {
    // TODO Sine interpolation
  }

  Tween.prototype.update = function(delta) {
    if(!this.finished) {
      if(this.time >= this.duration) {
        this.finished = true;
      } else {
        this.action.call(null, this.func((this.duration - this.time) / this.duration));
        this.time += delta;
      }
    }
  }

  return Tween;
})
