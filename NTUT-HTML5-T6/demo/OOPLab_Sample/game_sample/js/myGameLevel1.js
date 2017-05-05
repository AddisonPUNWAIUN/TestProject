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
						this.character[j].scale = 0.75;
						this.character[j].position = {
								x: Framework.Game.getCanvasWidth()/3+(75*i)+60,
								y: Framework.Game.getCanvasHeight() / 2-76
							}
					}
				}
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

                             this.myHP =1;
                             this.bossHP=1;

			},
			update: function() {
                    this.rootScene.update();
			        this.gameMap.update();
			    },

    draw:function(parentCtx){
        //this.rootScene.draw();
        //可支援畫各種單純的圖形和字
        this.rootScene.draw(parentCtx);
        this.gameMap.draw(parentCtx);
        parentCtx.fillStyle = 'red';
        parentCtx.fillRect(395, 250, 620, 20);

                             parentCtx.fillStyle = 'red';
                             parentCtx.fillRect(478, 310, 450, 10);
        this.ctx = parentCtx;

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
                             this.HP=this.gameMap.life();
                             this.ctx.fillStyle = 'black';
                             this.ctx.fillRect(478, 310, 450, 10);
                             this.ctx.fillStyle = 'red';
                             this.ctx.fillRect(478, 310,this.HP * 450, 10);
                             this.bossHP=this.gameMap.atk();
                             this.ctx.fillStyle = 'black';
                             this.ctx.fillRect(395, 250,620, 20);
                             this.ctx.fillStyle = 'red';
                             this.ctx.fillRect(395, 250,this.bossHP * 620, 20);
             this.isTouchArrow = false;
            }

        },
				touchstart: function (e) {
						//為了要讓Mouse和Touch都有一樣的事件
						//又要減少Duplicated code, 故在Touch事件被觸發時, 去Trigger Mouse事件
						this.mousedown(e[0]);
				},

				touchend: function (e) {
						this.mouseup();
				},

				touchmove: function (e) {
						this.mousemove(e[0]);
				}



})
