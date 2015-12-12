define([
  'game/scenarios/Scenario',
  'game/hud/Hint',
  'game/seeds/EnergySeed',
  'game/Meteor'
],
function(Scenario,
         Hint,
         EnergySeed,
         Meteor) {
  var Tutorial = function(game) {
    Scenario.call(this, game);

    var planetHint1 = new Hint("This is your planet", game.planet);
    var planetHint2 = new Hint("Protect it", game.planet);

    this.at(0.5, function() {
      game.addChild(planetHint1);
    });

    this.at(2, function() {
      game.removeChild(planetHint1);
      game.addChild(planetHint2);
    });

    this.at(3.5, function() {
      game.removeChild(planetHint2);
    });

    var seedHint;

    this.at(4, function() {
      var demoSeed = game.spawnFallingObject(EnergySeed);
      seedHint = new Hint("This is a Seed", demoSeed);
      game.addChild(seedHint);

      demoSeed.planted = (function(plant){
        var plantHint = new Hint("Grow plants to protect your planet", plant);
        game.addChild(plantHint);

        this.after(2, function() {
          game.removeChild(plantHint);

          this.after(0.5, function() {
            var controlsHint = new Hint("Rotate the planet\nusing LEFT and RIGHT buttons\n (A, D)", game.planet);

            game.addChild(controlsHint);

            this.after(2, function() {
              game.removeChild(controlsHint);

              var meteorHint = new Hint("Don't let meterites hit the plants", game.planet);
              game.addChild(meteorHint);

              var demoMeteor = game.spawnFallingObject(Meteor);
              demoMeteor.speed *= 0.5;

              this.after(2, function() {
                game.removeChild(meteorHint);
              })
            });
          });
        });
      }).bind(this);
    });
  }

  extend(Tutorial, Scenario);

  return Tutorial;
});
