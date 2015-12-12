define(['pixi',
        'core/GameObject',
        'game/Planet',
        'game/plants/Plant',
        'game/seeds/Seed',
        'game/Meteor',
        'game/bonuses/Enlarge',
        'core/Input',
        'game/scenarios/Tutorial',
        'game/Sun'],
        function(PIXI,
                 GameObject,
                 Planet,
                 Plant,
                 Seed,
                 Meteor,
                 Enlarge,
                 Input,
                 Tutorial,
                 Sun) {
  var Game = function() {
    GameObject.call(this);

    Game.current = this;

    this.planet = new Planet(10);
    this.addChild(this.planet);

    this.sun = new Sun(this.planet);
    this.addChild(this.sun);

    this._shake = {
      amp: 0,
      time: 0,
      elTime: 0,
      phase: 0
    };

    this.scenario = new Tutorial(this);
  }

  extend(Game, GameObject);

  Game.prototype.spawnFallingObject = function(Type) {
    var object = new Type();
    var rndA = (Math.PI * 2) * Math.random();

    object.x = Math.cos(rndA) * 500;
    object.y = Math.sin(rndA) * 500;
    object.aim(this.planet);

    this.addChild(object);

    return object;
  }

  Game.prototype.update = function(delta) {

    if(this.scenario) {
      this.scenario.update(delta);
    }

    if(Input.current.left()) {
      this.planet.rotation -= Math.PI/2*delta;
    }

    if(Input.current.right()) {
      this.planet.rotation += Math.PI/2*delta;
    }

    if(this._shake.elTime < this._shake.time) {
      var dt = 1-(this._shake.elTime / this._shake.time);

      this.x = Math.sin(this._shake.phase * Math.random()) * (this._shake.amp * dt);
      this.y = Math.cos(this._shake.phase * Math.random()) * (this._shake.amp * dt);

      this._shake.elTime += delta;

      this._shake.phase += Math.PI/4;
    }

    this.super.update.call(this, delta);
  }

  Game.prototype.shake = function(amp, time) {
    this._shake.amp = amp || 10;
    this._shake.time = time || 0.5;
    this._shake.elTime = 0;
    this._shake.phase = 0;
  };

  return Game;
});
