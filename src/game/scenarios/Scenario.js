define([], function() {
  var Scenario = function(game) {
    this.game = game;
    this.timeLeft = 0;
    this.actions = [];
  }

  Scenario.prototype.at = function(time, action) {
    this.actions.push({
      'at': time,
      'action': action
    });
  }

  Scenario.prototype.each = function(interval, action) {
    this.actions.push({
      'each': interval,
      'action': action,
      'time': 0
    })
  }

  Scenario.prototype.after = function(time, action) {
    this.actions.push({
      'after': time,
      'action': action,
      'time': 0
    })
  }

  Scenario.prototype.update = function(delta){
    for(var i = this.actions.length - 1; i >= 0; i--) {
      var a = this.actions[i];

      if((a['at']) || (a['at'] == 0)) {
        if(this.timeLeft >= a['at']) {
          a['action'].call(this);
          this.actions.splice(i, 1);
        }
      }

      if(a['each']) {
        if(a['time'] >= a['each']) {
          a['action'].call(this);
          a['time'] = 0;
        }else{
          a['time'] += delta;
        }
      }

      if(a['after']) {
        if(a['time'] >= a['after']) {
          a['action'].call(this);
          this.actions.splice(i, 1);
        }else{
          a['time'] += delta;
        }
      }
    }

    this.timeLeft += delta;
  };

  return Scenario;
});
