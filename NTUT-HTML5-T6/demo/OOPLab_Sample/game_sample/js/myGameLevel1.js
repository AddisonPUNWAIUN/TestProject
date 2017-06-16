var MyGame = Framework.Class(Framework.Level , {
	load: function(){
        //background
        this.fightbackground=new Framework.Sprite(define.imagePath + 'fightbackground.jpg');
        this.fightbackground.position = {
                x: Framework.Game.getCanvasWidth() / 2,
                y: Framework.Game.getCanvasHeight() / 2
        };
        this.fightbackground.scale = 2;
        //background

        //character
        this.character_p=new character_pic();
        this.character_p.load();
        //character

        //boss
        this.boss = new boss();
        this.boss.load();
        //boss

        //隊伍
        this.pt = new pt();
        //隊伍

       //MAP
       this.gameMap = new GameMap();
       this.gameMap.load();
       this.rootScene.attach(this.gameMap);
       //MAP
       this.isTouchArrow = false;//helper
       this.HP =1;//HP(%)
       this.bossHP=1;//bossHP(%)
       this.playData = [];//playData
    },


    initialize: function() {
				Framework.Game.audio.play({name: 'Fight', loop: true});
    },
    update: function() {
        this.gameMap.update();
    },

    draw:function(parentCtx){
        //可支援畫各種單純的圖形和字
        this.fightbackground.draw();//background
        this.boss.draw();//boss
        this.character_p.draw();//character
        this.rootScene.draw(parentCtx);
        this.gameMap.draw(parentCtx);//MAP
        //血條初始化
        parentCtx.fillStyle = 'red';
        parentCtx.fillRect(395, 210, 620, 20);
        //血條初始化
        parentCtx.fillStyle = 'red';
        parentCtx.fillRect(478, 310, 450, 10);

        this.ctx = parentCtx;
    },


    mousedown: function(e,parentCtx) {
        if(e.x<1300 && e.x>1000 && e.y<600 && e.y>500){//back to menu
						gameboss=1;
            temp=[-1,-1,-1,-1,-1,-1];
            Iseasy=0;
					  Framework.Game.audio.stopAll();
            Framework.Game.goToLevel('menu');
        }

        if(e){
            this.gameMap.mousedown (e);
            this.isTouchArrow = true;
        }
	 },

    click:function(e){

    },
    mousemove: function(e,parentCtx) {
        if (this.isTouchArrow) {
            this.fightbackground.draw();//draw
            this.boss.draw();//draw
            this.character_p.draw();//draw
            this.gameMap.mousemove (e); //to map
            this.gameMap.draw(parentCtx);//draw
            this.ctx.fillStyle = 'black';
            this.ctx.fillRect(478, 310, 450, 10);
            this.ctx.fillStyle = 'red';
            this.ctx.fillRect(478, 310,this.HP * 450, 10);
            this.ctx.fillStyle = 'black';
            this.ctx.fillRect(395, 210,620, 20);
            this.ctx.fillStyle = 'red';
            this.ctx.fillRect(395, 210,this.bossHP * 620, 20);
        }
    },

    mouseup: function(e,parentCtx) {
	    this.fightbackground.draw();//draw
		this.boss.draw();//draw
        this.character_p.draw();//draw
        this.gameMap.mouseup ();//to map
        this.gameMap.draw(parentCtx);
        if(this.isTouchArrow){
            this.gameMap.clear();//to map
            this.playData=this.gameMap.getdate();//to map
            this.HP=this.gameMap.life();//to map
            this.bossHP=this.gameMap.atk();//to map
            this.HP=this.gameMap.life();//to map
            this.boss.draw(parentCtx);//draw
            //draw play date
            this.ctx.fillStyle = 'black';
            this.ctx.fillRect(478, 310, 450, 10);
            this.ctx.fillStyle = 'red';
            this.ctx.fillRect(478, 310,this.HP * 450, 10);
            this.ctx.font = '15pt Algerian';
            this.ctx.globalAlpha=1;
            this.ctx.fillStyle = 'blue';
            this.ctx.textBaseline = 'top';
            this.ctx.textAlign = 'left';
            this.ctx.fillText( this.HP*100 +" % " ,478, 310);
            this.ctx.fillStyle = 'black';
            this.ctx.fillRect(395, 210,620, 20);
            this.ctx.fillStyle = 'red';
            this.ctx.fillRect(395, 210,this.bossHP * 620, 20);
            this.ctx.font = '15pt Algerian';
            this.ctx.globalAlpha=1;
            this.ctx.fillStyle = 'blue';
            this.ctx.textBaseline = 'top';
            this.ctx.textAlign = 'left';
            this.ctx.fillText( this.bossHP*100 +" % " ,395, 210);
            this.gameMap.draw(parentCtx);
            this.ctx.globalAlpha=0.8;
            this.ctx.fillStyle = 'black';
            this.ctx.fillRect(10, 40, 300, 300);
            this.ctx.font = '30pt Algerian';
            this.ctx.globalAlpha=1;
            this.ctx.fillStyle = 'yellow';
            this.ctx.textBaseline = 'top';
            this.ctx.textAlign = 'left';
            this.ctx.fillText("comble="+this.playData[0] , 10, 40);
            this.ctx.font = '30pt Algerian';
            this.ctx.globalAlpha=1;
            this.ctx.fillStyle = 'yellow';
            this.ctx.textBaseline = 'top';
            this.ctx.textAlign = 'left';
            this.ctx.fillText("火攻擊="+this.playData[1] , 10, 80);
            this.ctx.font = '30pt Algerian';
            this.ctx.globalAlpha=1;
            this.ctx.fillStyle = 'yellow';
            this.ctx.textBaseline = 'top';
            this.ctx.textAlign = 'left';
            this.ctx.fillText("水攻擊="+this.playData[2] , 10, 120);
            this.ctx.font = '30pt Algerian';
            this.ctx.globalAlpha=1;
            this.ctx.fillStyle = 'yellow';
            this.ctx.textBaseline = 'top';
            this.ctx.textAlign = 'left';
            this.ctx.fillText("木攻擊="+this.playData[3] , 10, 160);
            this.ctx.font = '30pt Algerian';
            this.ctx.globalAlpha=1;
            this.ctx.fillStyle = 'yellow';
            this.ctx.textBaseline = 'top';
            this.ctx.textAlign = 'left';
            this.ctx.fillText("光攻擊="+this.playData[4] , 10, 200);
            this.ctx.font = '30pt Algerian';
            this.ctx.globalAlpha=1;
            this.ctx.fillStyle = 'yellow';
            this.ctx.textBaseline = 'top';
            this.ctx.textAlign = 'left';
            this.ctx.fillText("暗攻擊="+this.playData[5] , 10, 240);

            this.CDdate=this.gameMap.getCd();//get CD

            this.ctx.font = '30pt Algerian';
            this.ctx.globalAlpha=1;
            this.ctx.fillStyle = 'yellow';
            this.ctx.textBaseline = 'top';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(this.CDdate[0] , 500 , 250);
            this.ctx.font = '30pt Algerian';
            this.ctx.globalAlpha=1;
            this.ctx.fillStyle = 'yellow';
            this.ctx.textBaseline = 'top';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(this.CDdate[1] , 570 , 250);
            this.ctx.font = '30pt Algerian';
            this.ctx.globalAlpha=1;
            this.ctx.fillStyle = 'yellow';
            this.ctx.textBaseline = 'top';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(this.CDdate[2] , 640 , 250);
            this.ctx.font = '30pt Algerian';
            this.ctx.globalAlpha=1;
            this.ctx.fillStyle = 'yellow';
            this.ctx.textBaseline = 'top';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(this.CDdate[3] , 710 , 250);
            this.ctx.font = '30pt Algerian';
            this.ctx.globalAlpha=1;
            this.ctx.fillStyle = 'yellow';
            this.ctx.textBaseline = 'top';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(this.CDdate[4] , 780 , 250);
            this.ctx.font = '30pt Algerian';
            this.ctx.globalAlpha=1;
            this.ctx.fillStyle = 'yellow';
            this.ctx.textBaseline = 'top';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(this.CDdate[5] , 850 , 250);
            this.ctx.font = '30pt Algerian';
            this.ctx.globalAlpha=1;
            this.ctx.fillStyle = 'yellow';
            this.ctx.textBaseline = 'top';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(this.CDdate[6] , 480 , 100);
            //draw play date end
            this.isTouchArrow = false;

            }
                            this.ctx.globalAlpha=0.8;
                             this.ctx.fillStyle = 'black';
                             this.ctx.fillRect(1000, 500, 300, 100);
                             this.ctx.font = '30pt Algerian';
                             this.ctx.globalAlpha=1;
                             this.ctx.fillStyle = 'yellow';
                             this.ctx.textBaseline = 'top';
                             this.ctx.textAlign = 'left';
                             this.ctx.fillText("Back to menu",1000, 500);

        },
})
