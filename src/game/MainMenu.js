define([
  'pixi',
  'core/GameObject',
  'game/Game',
  'game/GameMain'
],
function(PIXI,
         GameObject,
         Game,
         GameMain) {
  var MenuItem = function(itemText, callback) {
    GameObject.call(this);

    this.buttonMode = true;

    var text = new PIXI.Text(itemText, {fill: '#ffffff', align: 'center'});

    text.x = -text.width / 2;
    text.y = -text.height / 2;

    this.addChild(text);
    this.mousedown = callback;
  };

  extend(MenuItem, GameObject);

  var MainMenu = function() {
    GameObject.call(this);

    var startGame = new MenuItem("Start Game", function() {
      GameMain.current.setState(new Game());
    });

    this.addChild(startGame);
  };

  extend(MainMenu, GameObject);

  return MainMenu;
});
