var MyGame = Framework.Class(Framework.Level , {

	load: function(){
		//this.random = function(){fightbackground
			this.fightbackground=new Framework.Sprite(define.imagePath + 'fightbackground.jpg');
			this.character=[ new Framework.Sprite(define.imagePath + 'c1.png'),new Framework.Sprite(define.imagePath + 'c2.png'),new Framework.Sprite(define.imagePath + 'c3.png'),new Framework.Sprite(define.imagePath + 'c4.png'),new Framework.Sprite(define.imagePath + 'c5.png')
											,new Framework.Sprite(define.imagePath + 'c6.png'),new Framework.Sprite(define.imagePath + 'c7.png'),new Framework.Sprite(define.imagePath + 'c8.png'),new Framework.Sprite(define.imagePath + 'c9.png'),new Framework.Sprite(define.imagePath + 'c10.png')];
			//fightbackground
			this.fightbackground.position = {
					x: Framework.Game.getCanvasWidth() / 2,
					y: Framework.Game.getCanvasHeight() / 2
			};
			this.fightbackground.scale = 2;
			this.rootScene.attach(this.fightbackground);
			//fightbackground

			//boss
			this.boss = new boss1();
			this.boss.load();
			this.rootScene.attach(this.boss);
			//boss

			//character
			for(var i=0;i<10;i++){
				this.character[i].position = {
						x: -100,
						y: -100
					}
			}
			for(var i=0;i<10;i++){
				for(var j=0;j<10;j++){
					if(temp[i]===j){
						this.character[j].scale = 0.8;
						this.character[j].position = {
								x: Framework.Game.getCanvasWidth()/3+(80*i)+50,
								y: Framework.Game.getCanvasHeight() / 2-90
							}
					}
				};
			}
			for(var i=0;i<10;i++){
				this.rootScene.attach(this.character[i]);
			}
			//character

	       this.gameMap = new GameMap();
	       this.gameMap.load();
	       this.rootScene.attach(this.gameMap);
	       this.isTouchArrow = false;
				 Framework.Game.audio.play({name: 'Fight', loop: true});

			},

    draw:function(parentCtx){
        //this.rootScene.draw();
        //可支援畫各種單純的圖形和字
        this.gameMap.draw(parentCtx);
    },

            update:function(){
             this.rootScene.update();
             },


             mouseup: function(e) {
             this.isTouchArrow = false;
             },

             mousedown: function(e,parentCtx) {
             if(e){
             console.log(e.x, e.y);
              this.gameMap.mousedown (e);
             this.isTouchArrow = true;
             this.gameMap.draw(parentCtx);
             }
             },

             click:function(e){

             },

             mousemove: function(e,parentCtx) {
             if (this.isTouchArrow) {
                this.gameMap.mousemove (e);
             this.gameMap.draw(parentCtx);
             }
             },

             mouseup: function(e,parentCtx) {
             if(this.isTouchArrow){
             this.gameMap.clear();
             this.gameMap.draw(parentCtx);
						 this.gameMap.fall();
						 this.gameMap.draw(parentCtx);
						 this.gameMap.reccreate();
						// setTimeout('',1000);
						  this.gameMap.draw(parentCtx);
             this.isTouchArrow = false;
             }
             this.isTouchArrow = false;
             },

})
