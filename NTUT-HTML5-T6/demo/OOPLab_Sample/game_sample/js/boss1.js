var boss1 = function(){
    this.load = function(){
          this.boss1 = new Framework.Sprite(define.imagePath + 'boss1.png');
    			this.boss1.scale = 0.9;
          this.blood = new Framework.Sprite(define.imagePath + 'blood_frame.png');
    };

    this.initialize =function(){

    };
    this.update = function(){

    };

    this.draw =function(ctx){
        var picP ={
        x:680,
        y:150,
        }
        this.boss1.position=picP;
        this.boss1.draw(ctx);
        var blood_picP ={
        x:700,
        y:230,
        }
        this.blood.position=blood_picP;
        this.blood.draw(ctx);
    };

}
