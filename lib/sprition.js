//
// Initial sketch :)
//
var Sprition = {
  positions: [],
  maxSprites: 0,
  initial: 0,
  interval: 180,
  objId: '',
  increment: 0,


  run: function(){
    var pos;
    var self = this;
    setInterval(function(){
      pos = self.increment;
      self.increment++;
      if(self.increment > self.maxSprites) self.increment = self.initial;
      self.changeImage(self.getObj(), pos);
    }, self.interval);
  },

  getObj: function(){
    return document.getElementById(this.objId);
  },

  changeImage: function(obj, pos){
    obj.style.backgroundPosition = this.positions[pos];
  }

}

$(function(){
  Sprition.positions = [ '-27px -218px', '-99px -220px', '-187px -218px', '-262px -220px' ]
  Sprition.maxSprites = 3;
  Sprition.interval = 180;
  Sprition.objId = 'animation';
  Sprition.run();
});
