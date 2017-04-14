var GreenBall = function(){
  this.PH = 100;
  this.PW = 100;

  this.position = {
  x:0,
  y:0
  };

  this.load = function(){
    this.KI = new Framework.Sprite(define.imagePath + 'KI.png');
  }

  this.initialize =function(){

  };
  this.update = function(){

  };

  this.draw =function(ctx){
    this.KI.draw(ctx);
  };
}
