var BlackBall = function(){
  this.PH = 100;
  this.PW = 100;

  this.position = {
  x:0,
  y:0
  };

  this.load = function(){
  this.YAMI = new Framework.Sprite(define.imagePath + 'YAMI.png');
  }

  this.initialize =function(){

  };
  this.update = function(){

  };

  this.draw =function(ctx){
    this.YAMI.draw(ctx);
  };
}
