var ChooseCharacter = Framework.Class(Framework.Level , {

            load: function(){
               this.background=new Framework.Sprite(define.imagePath + 'chooseCHBG.jpg');
               this.start=new Framework.Sprite(define.imagePath + 'start.jpg');
               this.reset=new Framework.Sprite(define.imagePath + 'reset.jpg');

               this.c =[ new Framework.Sprite(define.imagePath + 'c1.png'),new Framework.Sprite(define.imagePath + 'c2.png'),new Framework.Sprite(define.imagePath + 'c3.png'),new Framework.Sprite(define.imagePath + 'c4.png'),new Framework.Sprite(define.imagePath + 'c5.png'),
						         new Framework.Sprite(define.imagePath + 'c6.png'),new Framework.Sprite(define.imagePath + 'c7.png'),new Framework.Sprite(define.imagePath + 'c8.png'),new Framework.Sprite(define.imagePath + 'c9.png'),new Framework.Sprite(define.imagePath + 'c10.png')];

			         this.number=[ new Framework.Sprite(define.imagePath + '1.png'),new Framework.Sprite(define.imagePath + '2.png'),new Framework.Sprite(define.imagePath + '3.png'),new Framework.Sprite(define.imagePath + '4.png'),new Framework.Sprite(define.imagePath + '5.png'),new Framework.Sprite(define.imagePath + '6.png')];

               this.NoChooseText= new Framework.Sprite(define.imagePath + 'nochoose.png');
               this.nochooseMSG=0;

               this.previousTouch = { x: 0, y: 0 };
               this.currentTouch = { x: 0, y: 0 };
               this.count=0;

               this.cc=-1;

                //background
                this.background.position = {
                    x: Framework.Game.getCanvasWidth() / 2,
                    y: Framework.Game.getCanvasHeight() / 2
                };
                this.background.scale = 2;
                this.rootScene.attach(this.background);
                //background

                //start button
                this.start.scale = 1;
                this.start.position = {
                   x: Framework.Game.getCanvasWidth()/2+500,
                   y: Framework.Game.getCanvasHeight()/3+300
                };
                this.rootScene.attach(this.start);
                //start button

                //reset button
                this.reset.scale = 1;
                this.reset.position = {
                   x: Framework.Game.getCanvasWidth()/2-500,
                   y: Framework.Game.getCanvasHeight()/3+300
                };
                this.rootScene.attach(this.reset);
                //reset button

                //character
                for(var i=0;i<6;i++){
                     this.c[i].position = {
                        x: Framework.Game.getCanvasWidth()/5+(170*i),
                        y: Framework.Game.getCanvasHeight() / 4
                };}
				        for(var i=0;i<4;i++){
                     this.c[i+6].position = {
                        x: Framework.Game.getCanvasWidth()/5+(170*i),
                        y: Framework.Game.getCanvasHeight() / 4+120
                };}
                for(var i=0;i<10;i++){
                  this.rootScene.attach(this.c[i]);
                }
                //character

                //number
                for(var i=0;i<6;i++){
                     this.number[i].scale = 0.5;
                     this.number[i].position = {
                        x:-100,
                        y:-100
                };}
                for(var i=0;i<6;i++){
                  this.rootScene.attach(this.number[i]);
                }
                //number
            },

           update:function(){
           this.rootScene.update();
           },

           draw: function(parentCtx) {
             this.rootScene.draw(parentCtx);
           },

           mousemove: function(e) {

              this.currentTouch = { x: e.x , y: e.y };

              for(var i=0;i<10;i++){
                if(this.currentTouch.x>=this.c[i].position.x-60 && this.currentTouch.x<=this.c[i].position.x+60 && this.currentTouch.y>=this.c[i].position.y-65 && this.currentTouch.y<=this.c[i].position.y+65 ){
                    if(this.currentcharater!=i && this.currentcharater!=-1){this.c[this.currentcharater].scale = 1;}
                    this.currentcharater=i;
                    this.c[i].scale = 1.2;
                    console.log("in:",this.currentcharater);
                }
                else {
                  this.currentcharater=-1;
                }
              }





           },

          mousedown: function(e) {
            var hasexit=0;
            this.currentTouch = { x: e.x , y: e.y };

            if(this.nochooseMSG===1){//x=+-222 y=+-22
              if(this.currentTouch.x>=this.NoChooseText.position.x-222 && this.currentTouch.x<=this.NoChooseText.position.x+222 /*&& this.currentTouch.y>=this.NoChooseText.position.y+50 && this.currentTouch.y<=this.c[i].position.y+77*/ ){
                this.nochooseMSG=0;
                this.NoChooseText.position = {
                   x: -100,
                   y: -100
                };
                this.rootScene.attach(this.NoChooseText);
              }
            }
            else{
           //選擇角色順序,存入全域變數 temp
           for(var i=0;i<10;i++){
              if(this.count>=6) break;
              if(this.currentTouch.x>=this.c[i].position.x-60 && this.currentTouch.x<=this.c[i].position.x+60 && this.currentTouch.y>=this.c[i].position.y-65 && this.currentTouch.y<=this.c[i].position.y+65 ){
                  //檢查是否已選擇
                  for(var j=0;j<6;j++){
                      if(temp[j]===i) {hasexit=1;break;}
                  }
                  if(hasexit) break;
                  //檢查是否已選擇
                  temp[this.count]=i;
                  this.number[this.count].position = {
                     x: this.c[i].position.x,
                     y: this.c[i].position.y};
                temp[this.count]=i;this.count++;
              }
            }
           //選擇角色順序,存入全域變數 temp

           //檢查是否有選擇隊員 start
           if(this.currentTouch.x>=this.start.position.x-164 && this.currentTouch.x<=this.start.position.x+164 && this.currentTouch.y>=this.start.position.y-65 && this.currentTouch.y<=this.start.position.y+65 ){
             if(temp[0]===-1){
               this.nochooseMSG=1;
               this.NoChooseText.position = {
                  x: Framework.Game.getCanvasWidth()/2,
                  y: Framework.Game.getCanvasHeight()/2
               };
               this.rootScene.attach(this.NoChooseText);
             }
             else{
               Framework.Game.audio.stopAll();
               Framework.Game.goToNextLevel();//65 164
             }
           }
           //檢查是否有選擇隊員

           //檢查是否按在reset x+-=65,y+-=164;是:nextlevel x+-100 y+x63
           if(this.currentTouch.x>=this.reset.position.x-100 && this.currentTouch.x<=this.reset.position.x+100 && this.currentTouch.y>=this.reset.position.y-63 && this.currentTouch.y<=this.reset.position.y+63 ){
             this.count=0;
             temp=[-1,-1,-1,-1,-1,-1];
             for(var i=0;i<6;i++){
                  this.number[i].position = {
                     x:-100,
                     y:-100
             };}
           }
           //檢查是否按在reset x+-=65,y+-=164;是:nextlevel
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
           });
