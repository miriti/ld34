define(['game/plants/plant'], function(Plant) {
  var Defence = function() {
    Plant.call(this);

    this.fireTime = this.fireInterval = 0.5;
  };

  extend(Defence, Plant);

  Defence.prototype.update = function(delta) {
    Plant.prototype.update.call(this, delta);
  }

  return Defence;
});
