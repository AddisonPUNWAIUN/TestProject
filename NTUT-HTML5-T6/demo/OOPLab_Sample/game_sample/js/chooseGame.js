var choosegame = Framework.Class(Framework.Level , {
		load: function(){
			this.background = new Framework.Sprite(define.imagePath + 'choosegame_bg.jpg');
			this.background.position = {
					x: Framework.Game.getCanvasWidth() / 2,
					y: Framework.Game.getCanvasHeight() / 2
			};
			this.background.scale = 4.5;
			this.rootScene.attach(this.background);//背景圖片

			this.easy = new Framework.Sprite(define.imagePath + 'easy.png');
			this.easy.position = {
					x: Framework.Game.getCanvasWidth() / 2,
					y: Framework.Game.getCanvasHeight() / 2-100
			};
			this.easy.scale = 0.5;
			this.rootScene.attach(this.easy);//簡易選項按鈕

			this.hard = new Framework.Sprite(define.imagePath + 'hard.png');
			this.hard.position = {
					x: Framework.Game.getCanvasWidth() / 2,
					y: Framework.Game.getCanvasHeight() / 2+100
			};
			this.hard.scale = 0.5;
			this.rootScene.attach(this.hard);//困難選項按鈕
	  },

	  click:function(e){
			if(e.x > 558 && e.x < 784 && e.y > 208 && e.y < 283){
				Iseasy=1;
				Framework.Game.audio.stopAll();
				Framework.Game.audio.play({name: 'button'});
				Framework.Game.goToNextLevel();
			}//選擇簡易選項

			if(e.x > 558 && e.x < 784 && e.y > 408 && e.y < 483){
				Iseasy=0;
				Framework.Game.audio.stopAll();
				Framework.Game.audio.play({name: 'button'});
				Framework.Game.goToNextLevel();
			}//選擇困難選項
		},

    draw:function(parentCtx){
				this.background.draw(parentCtx);
				this.easy.draw(parentCtx);
				this.hard.draw(parentCtx);
    },
});
