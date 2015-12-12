define(['game/scenarios/Scenario'], function(Scenario) {
  var Level1 = function(game) {
    Scenario.call(this, game);

    // this.spawnInterval = this.spawnTime = 2;

    /*
    if(this.spawnTime <= 0) {
      var types = [Seed, Meteor, Enlarge];

      this.spawnFallingObject(types[Math.floor(types.length * Math.random())]);

      this.spawnTime = this.spawnInterval;
    } else {
      this.spawnTime -= delta;
    }
    */
  }

  return Level1;
})
