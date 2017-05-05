var MyGame = Framework.Class(Framework.Level , {

	load: function(){
		//this.random = function(){fightbackground
			this.fightbackground=new Framework.Sprite(define.imagePath + 'fightbackground.jpg');
			this.character=[ new Framework.Sprite(define.imagePath + 'c1.png'),new Framework.Sprite(define.imagePath + 'c2.png'),new Framework.Sprite(define.imagePath + 'c3.png'),new Framework.Sprite(define.imagePath + 'c4.png'),new Framework.Sprite(define.imagePath + 'c5.png')];
			//fightbackground
			this.fightbackground.position = {
					x: Framework.Game.getCanvasWidth() / 2,
					y: Framework.Game.getCanvasHeight() / 2
			};
			this.fightbackground.scale = 2;
			this.rootScene.attach(this.fightbackground);
			//fightbackground

		//character
		for(var i=0;i<5;i++){
			for(var j=0;j<5;j++){
				if(temp[i]===j){
					 this.character[j].scale = 1.7;
					 this.character[j].position = {
							x: Framework.Game.getCanvasWidth()/3+(125*i),
							y: Framework.Game.getCanvasHeight() / 6-20
						}
				}
		};}
		for(var i=0;i<5;i++){
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

		/**this.toucharea = [[this.random(),this.random(),this.random(),this.random(),this.random(),this.random()],
                [this.random(),this.random(),this.random(),this.random(),this.random(),this.random()],
                [this.random(),this.random(),this.random(),this.random(),this.random(),this.random()],
                [this.random(),this.random(),this.random(),this.random(),this.random(),this.random()],
                [this.random(),this.random(),this.random(),this.random(),this.random(),this.random()]];

		this.HI = [[new RedBall(),new RedBall(),new RedBall(),new RedBall(),new RedBall(),new RedBall()],
                [new RedBall(),new RedBall(),new RedBall(),new RedBall(),new RedBall(),new RedBall()],
                [new RedBall(),new RedBall(),new RedBall(),new RedBall(),new RedBall(),new RedBall()],
                [new RedBall(),new RedBall(),new RedBall(),new RedBall(),new RedBall(),new RedBall()],
                [new RedBall(),new RedBall(),new RedBall(),new RedBall(),new RedBall(),new RedBall()]];


        this.rootScene.attach(this.HI[0][0]);
		**/
        /**for(var i=0; i<5; i++){
            for(var j=0; j<6; j++){
                var picP ={
                           x:450+ 100*j,
                           y:200+ 100*i,
                }
                console.log(picP);
				switch(this.toucharea[i][j]){
                    case 0:
						this.HI[i][j].position=picP;
						this.rootScene.attach(this.HI[i][j]);
                        break;
					case 1:
                        this.KI.position=picP;
                        this.rootScene.attach(this.KI);
                        break;
                    case  2:
                        this.MITU.position=picP;
                        this.rootScene.attach(this.MITU);
                        break;
                    case   3:
                        this.HIKIRI.position=picP;
                        this.rootScene.attach(this.HIKIRI);
                        break;
                    case  4:
                        this.YAMI.position=picP;
                        this.rootScene.attach(this.YAMI);
                        break;
                    case   5:
                        this.HATO.position=picP;
                        this.rootScene.attach(this.HATO);
                        break;
                }
            }
        }**/
			/**this.gameMap = new GameMap();
            this.gameMap.load();
            this.rootScene.attach(this.gameMap);**/
                            update:function(){
                             //this.rootScene.update();一定要在第一行
                             this.rootScene.update();

                             //目前的Framework, 當任何一個GameObject不做attach時, 則必須要自行update
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
                            // Framework.Game.goToNextLevel();

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
                             this.isTouchArrow = false;
                             }
                             this.isTouchArrow = false;
                             },

})
