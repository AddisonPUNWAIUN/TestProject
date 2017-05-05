var PinkBall = function(){
  this.PH = 100;
  this.PW = 100;

  this.position = {
  x:0,
  y:0
  };

  this.load = function(){
    this.HATO = new Framework.Sprite(define.imagePath + 'HATO.png');
  }

  this.initialize =function(){

  };
  this.update = function(){

  };

  this.draw =function(ctx){
    this.HATO.draw(ctx);
  };
}
