var character_pic = function(){
    this.load = function(){
      this.character=[ new Framework.Sprite(define.imagePath + 'c1.png'),
                        new Framework.Sprite(define.imagePath + 'c2.png'),
                        new Framework.Sprite(define.imagePath + 'c3.png'),
                        new Framework.Sprite(define.imagePath + 'c4.png'),
                        new Framework.Sprite(define.imagePath + 'c5.png'),
                        new Framework.Sprite(define.imagePath + 'c6.png'),
                        new Framework.Sprite(define.imagePath + 'c7.png'),
                        new Framework.Sprite(define.imagePath + 'c8.png'),
                        new Framework.Sprite(define.imagePath + 'c9.png'),
                        new Framework.Sprite(define.imagePath + 'c10.png')];

          for(var i=0;i<10;i++){
            for(var j=0;j<10;j++){
              if(temp[i]===j){
                                // console.log(temp[i]);
                this.character[j].scale = 0.75;
                this.character[j].position = {
                    x: Framework.Game.getCanvasWidth()/3+(75*i)+60,
                    y: Framework.Game.getCanvasHeight() / 2-76
                  }
              }
            }
          }
    };

    this.update = function(){

    };

    this.draw =function(ctx){
      for(var i=0;i<10;i++){
        for(var j=0;j<10;j++){
          if(temp[i]===j){
            this.character[j].draw();
          }
        }
      }
    };
}
