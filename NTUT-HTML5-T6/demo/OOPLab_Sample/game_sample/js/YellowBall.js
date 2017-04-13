var YellowBall = function(){
  this.PH = 100;
  this.PW = 100;

  this.position = {
  x:0,
  y:0
  };

  this.load = function(){
  this.HIKIRI = new Framework.Sprite(define.imagePath + 'HIKARI.png');
  }

  this.initialize =function(){

  };
  this.update = function(){

  };

  this.draw =function(ctx){
    this.HIKIRI.draw(ctx);
  };
}
