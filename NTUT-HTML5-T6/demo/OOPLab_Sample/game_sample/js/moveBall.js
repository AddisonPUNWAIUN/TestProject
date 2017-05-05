//由於JS尚未支援Class(ECMAScript 6以後, 宣稱會支援)
//目前Class寫法都是以function的方式
//只要是this.XXX皆會是Public的property
var MoveBall = function(intex,spritePosition) {
    this movetime=240;
        switch(intex){
            case 0:
            this.ball = new Framework.Sprite(define.imagePath + 'HI.png');
            this.ball.scale = 0.75;
                break;
            case 1:
            this.ball = new Framework.Sprite(define.imagePath + 'KI.png');
            this.ball.scale = 0.75;
                break;
            case  2:
            this.ball = new Framework.Sprite(define.imagePath + 'MITU.png');
            this.ball.scale = 0.75;
                break;
            case   3:
            this.ball = new Framework.Sprite(define.imagePath + 'HIKARI.png');
            this.ball.scale = 0.75;
                break;
            case  4:
            this.ball = new Framework.Sprite(define.imagePath + 'YAMI.png');
            this.ball.scale = 0.75;
                break;
            case   5:
            this.ball = new Framework.Sprite(define.imagePath + 'HATO.png');
            this.ball.scale = 0.75;
                break;
        }

    this.update = function(){
      if(time>movetime){
         stopmoveing;
      }
      time++;
    };


    this.draw = function(ctx){
        this.ball.position = {x: this.spritePosition.x, y: this.spritePosition.y};
        this.ball.draw(ctx);
    }

};

