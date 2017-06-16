var GameMap = function(){
    this.PH = -1;//helper
    this.PW = -1;//
    this.HiAtk =0;
    this.KiAtk =0;
    this.MituAtk =0;
    this.HikariAtk =0;
    this.YamiAtk =0;
    this.HealNum =0;
    this.BossHP = 0;
    this.BossMaxHP = 0;
    this.bossNum =0;
    this.MyHp=30;
    this.BossAtkCd =3 ;
    this.BossAtk =0;
    this.round =0;
    this.hasmove =0;
    this.moved=0;
    this.maxHP=0;
    this.combo=0;
    this.time=0;
    this.timeup=0;
    this.helper=900;
    this.fistTouch=1;
    this.ptCD=[0,0,0,0,0,0];

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
        this.skil = new Character();
        this.Pt = new pt();
        this.MyHp= this.Pt.ptHP();
        this.maxHP=this.MyHp;
        this.stage = new Stage();
        this.MaxBossNum = this.stage.getboss();
        this.BossMaxHP= this.stage.bossHp(0);
        this.BossHP= this.stage.bossHp(0);
            console.log(this.BossHP);
        this.BossAtkCd = this.stage.bossCd(0);
            console.log(this.BossAtkCd);
        this.BossAtk = this.stage.bossAtk(0);
            console.log(this.BossAtk);
        this.getBall = new MoveBall();
        this.getBall.scfale = 0.70;
            this.getBall.pickupball(-1);
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
        this.BACK = new Framework.Sprite(define.imagePath + 'touch_area.png');
        this.BACK.scale = 0.75;
        this.consident = new Framework.Sprite(define.imagePath + 'gameOver.png');
        this.gameclear = new Framework.Sprite(define.imagePath + 'gameclear.png');

    };
    this.random = function(){//random function
        return Math.round(Math.random()*5.4);
    };

    this.moveBall=-1;

    //map away
    this.map = [[this.random(),this.random(),this.random(),this.random(),this.random(),this.random()],
                [this.random(),this.random(),this.random(),this.random(),this.random(),this.random()],
                [this.random(),this.random(),this.random(),this.random(),this.random(),this.random()],
                [this.random(),this.random(),this.random(),this.random(),this.random(),this.random()],
                [this.random(),this.random(),this.random(),this.random(),this.random(),this.random()]];


    this.initialize =function(){

    };
    this.update = function(){
        if(this.moved===0){
                this.time=0;//重設時間
                this.timeup=0;
            }
;        if(this.moved===1){
              this.time++;//計時
              if(this.time >=1600){
                  this.time=0;
                  this.timeup=1;//發動KEY
              }
        }
    };

    this.reccreate = function(){//重新生成
        for(var i=5; i>=0; i--){
            for(var j=4; j>=0; j--){
                if(this.map[j][i]===-1){
                    this.map[j][i]=this.random();
                }
            }
        }
    };


    this.fall = function(){//掉下（珠子）
        for(var i=5; i>=0; i--){
            for(var j=4; j>=1; j--){
                if(this.map[j][i]=== -1){
                    for(var k=j;k>=0;k--){;
                        if(this.map[k][i]!= -1){
                            this.map[j][i]=this.map[k][i];
                            this.map[k][i]= -1;
                            break;
                        }
                    }
                }
            }
        }
    };

    this.clear = function(){//消除
        var forReturn=0;
        var x=1;
        var y=1;
        var z=0;
        var helper=0;
        var sameNum=0;
        var clearNum=0;
         if(this.moved==1){
        for(var i=0; i<5; i++){
            for(var j=0; j<6; j++){
                if(this.map[i][j]!== -1){
                  z=this.map[i][j];
                  this.same[i][j] = 1;
                  this.sameball[sameNum][0]=i;
                  this.sameball[sameNum][1]=j;
                  sameNum++;
                  for(;;){
                    x=this.sameball[helper][0];
                    y=this.sameball[helper][1];
                    if(x-1>=0){//四方向檢查
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
                        this.combo++;//記錄
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
                        this.combo++;//記錄
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
                switch(z){
                    case 0://記錄
                        this.HiAtk=this.HiAtk+clearNum;
                        break;
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
            this.fall();
            this.reccreate();
            this.clear();
        }
        }
//消除完成
    };




    this.draw = function(ctx){//draw map
        console.log("do draw");
        var picP ={
            x:700,
            y:512.5,
        }
        this.consident.position=picP;
        this.gameclear.position=picP;
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
						this.HI.draw();
                        break;
                    case 1:
                        this.KI.position=picP;
                        this.KI.draw();
                        break;
                    case  2:
                        this.MITU.position=picP;
                        this.MITU.draw();
                        break;
                    case   3:
                        this.HIKIRI.position=picP;
                        this.HIKIRI.draw();
                        break;
                    case  4:
                        this.YAMI.position=picP;
                        this.YAMI.draw();
                        break;
                    case   5:
                        this.HATO.position=picP;
                        this.HATO.draw();
                        break;
                    case   -1:
                        break;
                }

            }
        }
        if(this.BossHP<=0&&this.bossNum<2){
            //
            console.log("gameboss",gameboss);
            this.bossNum++;
            this.BossHP = this.stage.bossHp(this.bossNum);
            console.log(this.BossHp);
            this.BossMaxHP = this.stage.bossHp(this.bossNum);
            console.log(this.BossMaHp);
            this.BossAtkCd=this.stage.bossCd(this.bossNum);
            this.BossAtk=this.stage.bossAtk(this.bossNum);
             console.log(this.BossAtk);
            gameboss++;

        }

        if(this.BossHP<=0&&this.bossNum===2){
            Framework.Game.audio.play({name: 'gameclear'});
            this.gameclear.draw(ctx);
        }

        if(this.MyHp<=0){
            Framework.Game.audio.play({name: 'gameover'});
            this.consident.draw(ctx);
        }
        this.getBall.draw(ctx);

    }


	this.mouseup = function() {
        if(this.fistTouch===0){
        this.map[this.PH][this.PW] = this.moveBall ;//復位
        }
        this.getBall.pickupball(-1);//還原
        return;
	};

	this.mousedown = function(e) {
        for(var i=0; i<6; i++){//技能
                if (e.x > 470+ 80*i &&e.x < 540+ 80*i && e.y > 235 && e.y < 300) {
                    this.skillAway = this.skil.skill(temp[i]);
                    switch (this.skillAway[0]) {
                        case 0:
                            if(this.skillAway[1]<=this.ptCD[i]){
                            this.BossHP=this.BossHP - (this.skil.atk(temp[i]))*this.skillAway[2];
                                this.ptCD[i]=0;
                               }
                            break;
                        case 1:
                            if(this.skillAway[1]<=this.ptCD[i]){
                                this.ptCD[i]=0;
                                for(var i=0; i<5; i++){
                                    for(var j=0; j<6; j++){
                                        if(this.map[i][j]=== this.skillAway[2]){
                                            this.map[i][j] = this.skillAway[3] ;

                                        }
                                    }
                                }

                            }
                             break;
                        case 2:
                            if(this.skillAway[1]<=this.ptCD[i]){
                                this.ptCD[i]=0;
                                this.moveBall=4;
                                for(var i=0; i<5; i++){
                                    for(var j=0; j<6; j++){
                                            this.map[i][j] = this.skillAway[2] ;
                                    }
                                }
                            }
                            break;
                        case 3:
                            if(this.skillAway[1]<=this.ptCD[i]){
                                this.MyHp=this.maxHP;
                                this.ptCD[i]=0;
                            }
                            break;
                        case 4:
                            if(this.skillAway[1]<=this.ptCD[i]){
                                this.ptCD[i]=0;
                                for(var i=0; i<5; i++){
                                    for(var j=0; j<6; j++){
                                            this.map[i][j] = this.random();
                                    }
                                }
                            }
                            break;
                        default:
                            break;
                            return 0;
                    }
                    this.helper=0;
                }
            }
            for(var i=0; i<5; i++){//珠子
                for(var j=0; j<6; j++){
                    if (e.x > 480+ 70*j &&e.x < 550+ 70*j && e.y > 330+ 70*i && e.y < 400+ 70*i) {
                        this.fistTouch=0;
                        this.moveBall = this.map[i][j] ;
                        this.map[i][j] = -1 ;
                        this.getBall.pickupball(this.moveBall);
                        this.PH=i;
                        this.PW=j;
                    }
                }
            }
        return;

	};

this.mousemove = function(e) {
    this.getBall.getposition(e);
    if(this.MyHp!=0||this.bossNum>2){
    if(this.timeup===0){
    for(var i=0; i<5; i++){//交換
        for(var j=0; j<6; j++){
            if(e.x < 480+ 70*this.PW ||e.x > 550+ 70*this.PW || e.y < 330+ 70*this.PH || e.y > 400+ 70*this.PH){
            if (e.x > 480+ 70*j &&e.x < 550+ 70*j && e.y > 330+ 70*i && e.y < 400+ 70*i) {
                if(this.hasmove==1) Framework.Game.audio.stop('MoveBall');
                Framework.Game.audio.play({name: 'MoveBall'});
                this.hasmove=1;
                  this.moved=1;
                  this.map[this.PH][this.PW]=this.map[i][j]  ;
                  this.map[i][j] = -1;
                  this.PH=i;
                  this.PW=j;

                }
              }
            }
        }
    }

    }
    return;
  };

this.life = function(){//血量計算
        console.log(this.Pt.ptRE(),(this.HealNum*0.33)*(this.Pt.ptRE())*(0.75+this.combo*0.25),this.combo);
        this.MyHp = this.MyHp +(this.HealNum*0.33)*this.Pt.ptRE()*(0.75+this.combo*0.25);
        if(this.MyHp>this.maxHP){
            this.MyHp=this.maxHP;

        }
        if(this.MyHp<=0){
              this.MyHp= 0;
        }
        this.HealNum =0;

        return (this.MyHp/this.maxHP);
    };
    this.getdate = function(){
        this.data = [this.combo,this.HiAtk*0.33*(this.Pt.ptatk0()),this.MituAtk*0.33*(this.Pt.ptatk2()),this.KiAtk*0.33*(this.Pt.ptatk1()),this.HikariAtk*0.33*(this.Pt.ptatk3()),this.YamiAtk*0.33*(this.Pt.ptatk4())]
        return this.data;
    };
    this.getCd = function(){//get skill CD
        this.returnCD = [];
        for(var x=0;x<=5;x++){
            this.skillAway = this.skil.skill(temp[x]);
            this.returnCD[x]=this.skillAway[1]-this.ptCD[x];
            if(this.returnCD[x]<=0){
                this.returnCD[x]=' ';
            }
        }
        this.returnCD[6]=this.BossAtkCd-this.round;
        
        return this.returnCD;
    };

    this.atk = function() { //計算攻擊力
        this.timeup=0;
        if(this.moved==1){
            for(var x=0;x<=5;x++){
            this.ptCD[x]++;
            }
        this.BossHP = this.BossHP - (this.HiAtk*0.33*(this.Pt.ptatk0()) +this.MituAtk*0.33*(this.Pt.ptatk2()) +this.KiAtk*0.33*(this.Pt.ptatk1()) + this.HikariAtk*0.33*(this.Pt.ptatk3()) + this.YamiAtk*0.33*(this.Pt.ptatk4()) )*(2.25+this.combo*0.25);
        console.log(this.MyHp,this.BossHP);
        this.HiAtk =0;
        this.KiAtk =0;
        this.MituAtk =0;
        this.HikariAtk =0;
        this.YamiAtk =0;
            this.combo=0;
        this.round++;

        }
        this.moved=0;
        if(this.round >=this.BossAtkCd ){
            this.MyHp=this.MyHp-this.BossAtk;
            this.round=0;
        }
        if(this.BossHP <=0 ){
            this.BossHP =0;
        }

        return (this.BossHP/this.BossMaxHP);

    };

}
