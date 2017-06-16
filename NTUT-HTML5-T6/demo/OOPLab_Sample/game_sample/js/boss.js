var boss = function(){

    this.load = function(){
          this.boss = [new Framework.Sprite(define.imagePath + 'boss1.png'),
                       new Framework.Sprite(define.imagePath + 'boss2.png'),
                       new Framework.Sprite(define.imagePath + 'boss3.png')];
          this.currentboss=this.boss[0];
          this.picP ={
          x:680,
          y:120,
          }
    };

    this.draw =function(){
      if(gameboss==1)  {this.currentboss=this.boss[0];this.currentboss.scale=0.6;}
      if(gameboss==2)  {this.currentboss=this.boss[1];this.currentboss.scale=0.54;}
      if(gameboss==3)  {
        this.currentboss=this.boss[2];
        this.currentboss.scale=1;
        this.picP ={
        x:680,
        y:40,
        }
      }
      this.currentboss.position=this.picP;
      this.currentboss.draw();
    };

}
