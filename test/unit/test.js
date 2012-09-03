$(document).ready(function(){
  test("basic configuration", function() {
    Sprition.positions = [ '-27px -218px', '-99px -220px', '-187px -218px', '-262px -220px' ];
    Sprition.maxSprites = 3;
    Sprition.interval = 500;
    Sprition.objId = 'animation';
    Sprition.run();
    ok(true)
  });

});
