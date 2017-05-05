var GameMap = function(){
    this.PH = 0;
    this.PW = 0;
    this.HiAtk =0;
    this.KiAtk =0;
    this.MituAtk =0;
    this.HikariAtk =0;
    this.YamiAtk =0;
    this.HealNum =0;
    this.BossHP =30;
    this.MyHp=30;
    this.BossAtkCd =3 ;
    this.round =0;
    this.hasmove =0;

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
        this.HI.scale = 0.70;
        this.KI = new Framework.Sprite(define.imagePath + 'KI.png');
        this.KI.scale = 0.70;
        this.MITU = new Framework.Sprite(define.imagePath + 'MITU.png');
        this.MITU.scale = 0.70;
        this.HIKIRI = new Framework.Sprite(define.imagePath + 'HIKARI.png');
        this.HIKIRI.scale = 0.70;
        this.YAMI = new Framework.Sprite(define.imagePath + 'YAMI.png');
        this.YAMI.scale = 0.70;
        this.HATO = new Framework.Sprite(define.imagePath + 'HATO.png');
        this.HATO.scale = 0.70;
        this.BACK = new Framework.Sprite(define.imagePath + 'touch_area.jpg');
        this.BACK.scale = 0.75;

        //this.HP = new Framework.Sprite(define.imagePath + 'Red.png');
        //this.HP.scale = 0.1;
        //this.HP.width = 1000 ;
        //this.HP.height = 10 ;

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
        var forReturn=0;
        var x=1;
        var y=1;
        var z=0;
        var helper=0;
        var sameNum=0;
        var clearNum=0;
        for(var i=0; i<5; i++){
            for(var j=0; j<6; j++){
              //console.log(i,j);
                if(this.map[i][j]!== -1){
                  z=this.map[i][j];
                  this.same[i][j] = 1;
                  this.sameball[sameNum][0]=i;
                  this.sameball[sameNum][1]=j;
                  sameNum++;
                  for(;;){
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
                        sameNum++;
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
        forReturn=1;
        for(sameNum=0; sameNum<6; sameNum++){
			if (this.same[helper][sameNum]===1){
                clearNum++;
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
        forReturn=1;
        for(helper=0; helper<5; helper++){
			if (this.same[helper][sameNum]===1){
                clearNum++;
            this.same[helper][sameNum]=2;
			this.map[helper][sameNum]=-1;
                forReturn=1;
			}
		}
    }
}
                    console.log(z,clearNum);
switch(z){
case 0:
    this.HiAtk=this.HiAtk+clearNum;
    break;ß
case 1:
    this.KiAtk=this.KiAtk+clearNum;
    break;
case  2:
    this.MituAtk=this.MituAtk+clearNum;
    break;
case   3:
    this.HikariAtk=this.HikariAtk+clearNum;
    break;
case  4:
    this.YamiAtk=this.YamiAtk+clearNum;
    break;
case   5:
    this.HealNum =this.HealNum + clearNum;
    break;
}
                    console.log(this.HiAtk,this.KiAtk,this.MituAtk,this.HikariAtk,this.YamiAtk);
                    clearNum=0;
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
        if(forReturn===1){
            console.log('OK');
            this.fall();
            console.log('OK');
            this.reccreate();
            console.log('OK');
            this.clear();
            console.log('OK');

        }
    };




    this.draw =function(ctx){
        var picP ={
        x:700,
        y:512.5,
        }
        this.BACK.position=picP;
        this.BACK.draw(ctx);
        for(var i=0; i<5; i++){
            for(var j=0; j<6; j++){
                var picP ={
                           x:512+ 75*j,
                           y:361+ 75*i,
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

        //this.HP;
    };


	this.mouseup = function(e) {
		//this.isTouchArrow = false;
	};

	this.mousedown = function(e) {
		for(var i=0; i<5; i++){
			for(var j=0; j<6; j++){
				if (e.x > 460+ 80*j &&e.x < 540+ 80*j && e.y > 300+ 80*i && e.y < 380+ 80*i) {
				    this.moveBall = this.map[i][j] ;
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
            if(this.PH!=i ||  this.PW!=j){
            if (e.x > 475+ 75*j &&e.x < 547+ 75*j && e.y > 323+ 75*i && e.y < 387+ 75*i) {
                if(this.hasmove==1) Framework.Game.audio.stop('MoveBall');
                Framework.Game.audio.play({name: 'MoveBall'});
                this.hasmove=1;

                  this.map[this.PH][this.PW]=this.map[i][j]  ;
                  this.map[i][j] = this.moveBall;
                  this.PH=i;
                  this.PW=j;
              }
            }
        }
    }


  };
    this.life = function(){
        this.MyHp = this.MyHp +this.HealNum;
        if(this.MyHp>30){
            this.MyHp=30;

        }
        if(this.MyHp<=0){
              this.MyHp= 0;
        }
        this.HealNum =0;

        return (this.MyHp/30);
    };

    this.atk = function() {
        this.BossHP = this.BossHP - this.HiAtk -this.MituAtk -this.KiAtk - this.HikariAtk -this.YamiAtk ;

        console.log(this.MyHp,this.BossHP);
        this.HiAtk =0;
        this.KiAtk =0;
        this.MituAtk =0;
        this.HikariAtk =0;
        this.YamiAtk =0;
        this.round++;
        if(this.round >=this.BossAtkCd ){
            this.MyHp=this.MyHp-3;
            this.round=0;
        }
        if(this.BossHP<=0){
            return 0;
        }

        return (this.BossHP/30);

    };

}
