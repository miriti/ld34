/**
 * Entry point
 */

require.config({
  paths: {
    "pixi": "lib/pixi.js/bin/pixi"
  }
});

var extend = function(a, b) {
  a.prototype = Object.create(b.prototype);
  a.prototype.constructor = a;
  a.prototype.super = b.prototype;
}

var S_WIDTH = 600;
var S_HEIGHT = 600;

require([
  'pixi',
  'core/Input',
  'game/GameMain',
  'game/Game',
  'game/MainMenu'
], function(PIXI,
            Input,
            GameMain,
            Game,
            MainMenu) {

  var renderer = new PIXI.autoDetectRenderer(S_WIDTH, S_HEIGHT);
  document.body.appendChild(renderer.view);

  new Input();

  var gameMain = new GameMain();
  gameMain.setState(new MainMenu());
  gameMain.interactive = true;
  gameMain.x = S_WIDTH / 2;
  gameMain.y = S_HEIGHT / 2;

  var lastTime = new Date().getTime();

  var render = function() {
    var currentTime = new Date().getTime();
    var delta = (currentTime - lastTime)/1000;
    lastTime = currentTime;

    gameMain.update(Math.min(delta, 1));
    renderer.render(gameMain);

    requestAnimationFrame(render);
  }

  render();
});
