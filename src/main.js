/**
 * Entry point
 */

require.config({
  paths: {
    "pixi": "lib/pixi.js/bin/pixi"
  }
});

require(['pixi'], function(PIXI) {
  var renderer = new PIXI.autoDetectRenderer(640, 480);
  document.body.appendChild(renderer.view);

  var stage = new PIXI.Container();

  var render = function() {
    requestAnimationFrame(render);

    renderer.render(stage);
  }

  render();
});
