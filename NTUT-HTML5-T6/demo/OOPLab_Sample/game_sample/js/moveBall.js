//由於JS尚未支援Class(ECMAScript 6以後, 宣稱會支援)
//目前Class寫法都是以function的方式
//只要是this.XXX皆會是Public的property
var MoveBall = function() {
    this.movetime=240;
    this.sprite = new Framework.AnimationSprite({url:define.imagePath + 'allball.png', col:5 , row:2 , loop:true , speed:1 });
    this.sprite.scale = 0.7;
    this.sprite.index = 1;
    this.spritePosition = {x: 0, y:0};
    this.update = function(){
    };

    this.getposition =function (e){
        this.sprite.position = {x: e.x, y: e.y};
    };
    this.pickupball = function(pickup){//pick ball
            if(pickup === -1){
                this.sprite.start({ from: 4 , to: 4 , loop: true});
            }else if(pickup === 0){
                this.sprite.start({ from: 0 , to: 0 , loop: true});
            }else if(pickup === 1){
                this.sprite.start({ from: 2 , to: 2 , loop: true});
            }else if(pickup === 2){
                this.sprite.start({ from: 1 , to: 1 , loop: true});
            }else if(pickup === 3){
                this.sprite.start({ from: 3 , to: 3 , loop: true});
            }else if(pickup === 4){
                this.sprite.start({ from: 5 , to: 5 , loop: true});
            }else if(pickup === 5){
                this.sprite.start({ from: 7 , to: 7 , loop: true});
            }
    };

    this.update = function(){
        var x = 0;
        this.sprite.update();
                this.sprite.stop();
                this.sprite.index = this.ballDirection;
        x++;
       console.log(x);
    };


    this.draw = function(ctx,e){
        this.sprite.draw(ctx);
    };
};
