define([
  'game/HoverObject'
],
function(HoverObject) {
  var UFO = function() {
    HoverObject.call(this);
  }

  extend(UFO, HoverObject);

  return UFO;
});
