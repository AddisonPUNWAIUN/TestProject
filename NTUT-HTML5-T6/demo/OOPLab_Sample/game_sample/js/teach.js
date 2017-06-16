var teach = Framework.exClass(Framework.GameMainMenu , {
    load: function() {
      this.left = new Framework.Sprite(define.imagePath + 'turnleft.png');//左箭頭
      this.right = new Framework.Sprite(define.imagePath + 'turnright.png');//右箭頭
      this.play = new Framework.Sprite(define.imagePath + 'play.png');//播放箭頭
      this.count = 0;
      this.teachpic = [new Framework.Sprite(define.imagePath + 'gd1.jpg'),
                        new Framework.Sprite(define.imagePath + 'gd2.jpg'),
                        new Framework.Sprite(define.imagePath + 'gd3.jpg'),
                        new Framework.Sprite(define.imagePath + 'gd4.jpg'),
                        new Framework.Sprite(define.imagePath + 'gd5.jpg'),
                        new Framework.Sprite(define.imagePath + 'gd6.jpg'),
                        new Framework.Sprite(define.imagePath + 'gd7.jpg'),
                        new Framework.Sprite(define.imagePath + 'gd8.jpg'),
                        new Framework.Sprite(define.imagePath + 'gd9.jpg'),
                        new Framework.Sprite(define.imagePath + 'gd10.JPG'),
                        new Framework.Sprite(define.imagePath + 'gd11.JPG')];//教學圖片

      this.current=this.teachpic[this.count];
      this.current.position = {//說明圖位置初始
          x: Framework.Game.getCanvasWidth() / 2,
          y: Framework.Game.getCanvasHeight() / 2
      };
      this.current.scale = 0.88;
      this.rootScene.attach(this.current);


      this.left.position = {//左箭頭圖位置初始
          x: Framework.Game.getCanvasWidth() / 2-605,
          y: Framework.Game.getCanvasHeight() / 2+310
      };
      this.left.scale = 0.4;
      this.rootScene.attach(this.left);

      this.right.position = {//右箭頭圖位置初始
          x: Framework.Game.getCanvasWidth() / 2+630,
          y: Framework.Game.getCanvasHeight() / 2+310
      };
      this.right.scale = 0.4;
      this.rootScene.attach(this.right);

      this.play.position = {//右箭頭圖位置初始
          x: Framework.Game.getCanvasWidth() / 2+610,
          y: Framework.Game.getCanvasHeight() / 2-310
      };
      this.play.scale = 0.3;
      this.rootScene.attach(this.play);

    },


    update:function(){
        //this.rootScene.update();一定要在第一行
        this.rootScene.update();
        //目前的Framework, 當任何一個GameObject不做attach時, 則必須要自行update
    },

    draw: function(parentCtx) {
        //this.rootScene.draw();一定要在第一行
        this.rootScene.draw(parentCtx);
        this.current.draw(parentCtx);
        this.left.draw(parentCtx);
        this.right.draw(parentCtx);
        this.play.draw(parentCtx);
        //this.rootScene.draw();

    },

    click:function(e){
      console.log(e);
      if(e.x>1253 && e.x <1330 && e.y>614 && e.y<685){
        Framework.Game.audio.play({name: 'button3'});
        if(this.count<=10) this.count+=1;
        this.current=this.teachpic[this.count];
        this.current.position = {
            x: Framework.Game.getCanvasWidth() / 2,
            y: Framework.Game.getCanvasHeight() / 2
        };
        this.current.scale = 0.88;
        this.current.draw();
        this.left.draw();
        this.right.draw();
        this.play.draw();
      }//判定是否接在右箭頭上 有則this.count-1 畫出this.teachpic[this.count];
      if(e.x>21 && e.x < 98 && e.y>614 && e.y<685){
        Framework.Game.audio.play({name: 'button3'});
        if(this.count>0) this.count-=1;
        this.current=this.teachpic[this.count];
        this.current.position = {
            x: Framework.Game.getCanvasWidth() / 2,
            y: Framework.Game.getCanvasHeight() / 2
        };
        this.current.scale = 0.88;
        this.current.draw();
        this.left.draw();
        this.right.draw();
        this.play.draw();
      }//判定是否接在左箭頭上  是則this.count+1 畫出this.teachpic[this.count];
      if(e.x > 1244 && e.x < 1323 && e.y > 15 && e.y<64){
        Framework.Game.goToLevel('ChooseCharacter');
      }//判定是否按在play圖片 是則開始遊戲
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
});
