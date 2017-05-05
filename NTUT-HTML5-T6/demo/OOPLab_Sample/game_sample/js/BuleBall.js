var BuleBall = function(){
  this.PH = 100;
  this.PW = 100;

  this.position = {
  x:0,
  y:0
  };

  this.load = function(){
  this.MITU = new Framework.Sprite(define.imagePath + 'MITU.png');
  }

  this.initialize =function(){

  };
  this.update = function(){

  };

  this.draw =function(ctx){
    this.MITU.draw(ctx);
  };
}
