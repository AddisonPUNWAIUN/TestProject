var GameMap = function(){
    this.PH = 0;
    this.PW = 0;

    this.sameball = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
					 [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
					 [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
					 [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
					 [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],];

	this.same = [[-1,-1,-1,-1,-1,-1],
                 [-1,-1,-1,-1,-1,-1],
                 [-1,-1,-1,-1,-1,-1],
                 [-1,-1,-1,-1,-1,-1],
                 [-1,-1,-1,-1,-1,-1]];

    this.position = {
    x: 1000,
    y:900
    };
        this.load = function(){
        this.HI = new Framework.Sprite(define.imagePath + 'HI.png');
        this.HI.scale = 0.75;
        this.KI = new Framework.Sprite(define.imagePath + 'KI.png');
        this.KI.scale = 0.75;
        this.MITU = new Framework.Sprite(define.imagePath + 'MITU.png');
        this.MITU.scale = 0.75;
        this.HIKIRI = new Framework.Sprite(define.imagePath + 'HIKARI.png');
        this.HIKIRI.scale = 0.75;
        this.YAMI = new Framework.Sprite(define.imagePath + 'YAMI.png');
        this.YAMI.scale = 0.75;
        this.HATO = new Framework.Sprite(define.imagePath + 'HATO.png');
        this.HATO.scale = 0.75;
        this.BACK = new Framework.Sprite(define.imagePath + 'touch_area.jpg');
        this.BACK.scale = 0.8;
        this.blood = new Framework.Sprite(define.imagePath + 'blood_frame.png');
        this.blood.scale = 0.8;
    };

    this.random = function(){
        return Math.round(Math.random()*5.4);
    };

    this.moveBall=-1;


    this.map = [[this.random(),this.random(),this.random(),this.random(),this.random(),this.random()],
                [this.random(),this.random(),this.random(),this.random(),this.random(),this.random()],
                [this.random(),this.random(),this.random(),this.random(),this.random(),this.random()],
                [this.random(),this.random(),this.random(),this.random(),this.random(),this.random()],
                [this.random(),this.random(),this.random(),this.random(),this.random(),this.random()]];

  /**  this.init = function(){
        //this.player1.StepMovedCallBack.push(this.playerMovedHandler);
        //this.constants = new Constants();
        this.mapArray = [];
        this.redArray = [];
        this.greenArray = [];
        this.blueArray = [];
        this.yellowArray = [];
        this.blackArray = [];
        this.pinkArray = [];
        this.noneArray = [];
        //0 空地  1牆壁  2空木箱  3增加炸彈木箱  4增加威力木箱  -1增加炸彈數  -2增加炸彈power
        for(var i=0; i<5; i++){
            for(var j=0; j<6; j++){
                this.mapArray[i][j]=this.random();
                switch(intex){
                    case 0:
                        this.ballType=this.constants.DirectionEnum.RED;
                        break;
                    case 1:
                        this.ballType=this.constants.DirectionEnum.GREEN;
                        break;
                    case  2:
                        this.ballType=this.constants.DirectionEnum.BLUE;
                        break;
                    case   3:
                        this.ballType=this.constants.DirectionEnum.YELL;
                        break;
                    case  4:
                        this.ballType=this.constants.DirectionEnum.BLACK;
                        break;
                    case   5:
                        this.ballType=this.constants.DirectionEnum.PINK;
                        break;
                    case   -1:
                        this.ballType=this.constants.DirectionEnum.NONE;
            }
        }
    };**/

    this.initialize =function(){

    };
    this.update = function(){

    };

    this.reccreate = function(){
        for(var i=5; i>=0; i--){
            for(var j=4; j>=0; j--){
                if(this.map[j][i]===-1){
                    this.map[j][i]=this.random();
                }
            }
        }
    };


    this.fall = function(){

        for(var i=5; i>=0; i--){
            for(var j=4; j>=1; j--){
                if(this.map[j][i]=== -1){
                    for(var k=j;k>=0;k--){
                      //this.map[0][1]=1;
                        if(this.map[k][i]!= -1){
                          console.log(i,j);
                          console.log(i,k);
                            this.map[j][i]=this.map[k][i];
                            this.map[k][i]= -1;
                            break;
                        }
                    }
                }
            }
        }
    };

    this.clear = function(){
        var x=1;
        var y=1;
        var z=0;
        var helper=0;
        var sameNum=0;
        for(var i=0; i<5; i++){
            for(var j=0; j<6; j++){
            //  console.log(i,j);
                if(this.map[i][j]!== -1){
                  z=this.map[i][j];
                  this.same[i][j] = 1;
                  this.sameball[sameNum][0]=i;
                  this.sameball[sameNum][1]=j;
                  sameNum++;
                  for(;;){
                  //  console.log(helper);
                    x=this.sameball[helper][0];
                    y=this.sameball[helper][1];
                    if(x-1>=0){
                      if(this.map[x-1][y]===z && this.same[x-1][y] !=1){
                        this.same[x-1][y] = 1;
                        this.sameball[sameNum][0]=x-1;
                        this.sameball[sameNum][1]=y;
                        sameNum++;
                      }
                    }
                    if(y-1>=0){
                      if(this.map[x][y-1]===z && this.same[x][y-1] !=1){
                        this.same[x][y-1] = 1;
                        this.sameball[sameNum][0]=x;
                        this.sameball[sameNum][1]=y-1;
                        this.sameNum++;
                      }
                    }
                    if(x+1<5){
                      if(this.map[x+1][y]===z && this.same[x+1][y] !=1){
                        this.same[x+1][y] = 1;
                        this.sameball[sameNum][0]=x+1;
                        this.sameball[sameNum][1]=y;
                        sameNum++;
                      }
                    }
                    if(y+1<6){
                      if(this.map[x][y+1]===z && this.same[x][y+1] !=1){
                        this.same[x][y+1] = 1;
                        this.sameball[sameNum][0]=x;
                        this.sameball[sameNum][1]=y+1;
                        sameNum++;
                      }
                    }
                    helper++;
                    if(helper===sameNum) {break;}
                    if(sameNum===0) {break;}
                  }
    for(var helper=0; helper<5; helper++){
                    x=0;
    for(var sameNum=0; sameNum<6; sameNum++){
        if (this.same[helper][sameNum]===1||this.same[helper][sameNum]===2){
            x++;
        }
    }
    if(x>=3){
        for(sameNum=0; sameNum<6; sameNum++){
			if (this.same[helper][sameNum]===1){
            this.same[helper][sameNum]=2;
			this.map[helper][sameNum]=-1;
			}
		}
    }
}

for(var sameNum=0; sameNum<6; sameNum++){
  x=0;
    for(var helper=0; helper<5; helper++){
        if (this.same[helper][sameNum]===1||this.same[helper][sameNum]===2){
            x++;
        }
    }
    if(x>=3){
        for(helper=0; helper<5; helper++){
			if (this.same[helper][sameNum]===1){
            this.same[helper][sameNum]=2;
			this.map[helper][sameNum]=-1;
			}
		}
    }
}
x=0;
for(helper=0; helper<5; helper++){
  for(sameNum=0; sameNum<6; sameNum++){
    this.same[helper][sameNum]=-1;
  }
}
helper=0;
sameNum=0;
                  }

                }
            }

    };

    this.remake = function(){
        for(var i=4; i>=0; i--){
            for(var j=5; j>=0; j--){

            }
        }
    };


    this.draw =function(ctx){
      var blood_picP={
          x:700,
          y:300
        }
        this.blood.position=blood_picP;
        this.blood.draw(ctx);
        var picP ={
        x:700,
        y:500,
        }
        this.BACK.position=picP;
        this.BACK.draw(ctx);
        for(var i=0; i<5; i++){
            for(var j=0; j<6; j++){
                var picP ={
                           x:500+ 80*j,
                           y:340+ 80*i,
                }
                switch(this.map[i][j]){
                    case 0:
						this.HI.position=picP;
						this.HI.draw(ctx);
                        break;
                    case 1:
                        this.KI.position=picP;
                        this.KI.draw(ctx);
                        break;
                    case  2:
                        this.MITU.position=picP;
                        this.MITU.draw(ctx);
                        break;
                    case   3:
                        this.HIKIRI.position=picP;
                        this.HIKIRI.draw(ctx);
                        break;
                    case  4:
                        this.YAMI.position=picP;
                        this.YAMI.draw(ctx);
                        break;
                    case   5:
                        this.HATO.position=picP;
                        this.HATO.draw(ctx);
                        break;
                    case   -1:
                        break;
                }

            }
        }
    };


	this.mouseup = function(e) {
		//this.isTouchArrow = false;
	};

	this.mousedown = function(e) {
//var k = 0 ;
//		var l = 0 ;
		for(var i=0; i<5; i++){
			for(var j=0; j<6; j++){
				if (e.x > 460+ 80*j &&e.x < 540+ 80*j && e.y > 300+ 80*i && e.y < 380+ 80*i) {
				    this.moveBall = this.map[i][j] ;
				   // this.map[i][j] = -1 ;

                    //this.draw(ctx);
				    this.PH=i;
				    this.PW=j;
				}
			}
		}
        //console.log(e.x, e.y);

	};

this.mousemove = function(e) {

    for(var i=0; i<5; i++){
        for(var j=0; j<6; j++){
            if (e.x > 460+ 80*j &&e.x < 540+ 80*j && e.y > 300+ 80*i && e.y < 380+ 80*i) {

                this.map[this.PH][this.PW]=this.map[i][j]  ;
                this.map[i][j] = this.moveBall;
                //this.draw(ctx);
                this.PH=i;
                this.PW=j;
            }
        }
    }


   // console.log(e.x, e.y);
   /** var k = 0 ;
    var l = 0 ;
           switch(this.moveBall){
            case 0:
                this.HI.position=e;
               // this.HI.draw(ctx);
                break;
            case 1:
                this.KI.position=e;
               // this.KI.draw(ctx);
                break;
            case  2:
                this.MITU.position=e;
               // this.MITU.draw(ctx);
                break;
            case   3:
                this.HIKIRI.position=e;
               // this.HIKIRI.draw(ctx);
                break;
            case  4:
                this.YAMI.position=e;
               // this.YAMI.draw(ctx);
                break;
            case   5:
                this.HATO.position=e;
               // this.HATO.draw(ctx);
                break;
        }
    for(var i=0; i<5; i++){
        for(var j=0; j<6; j++){
           // if (e.x > 50+ 100*j &&e.x < 150+ 100*j && e.y > 50+ 100*i && e.y < 50+ 100*j) {
               // var map[i][j] = this.map[k][l] ;
               // this.map[k][l] = -1 ;
               // k=i;
               // l=j;
          //  }
        }
    }**/
};

}
