var RedBall = function(){
    this.PH = 100;
    this.PW = 100;
    this.mapPosition = {x:0, y:0};
    this.HI = new Framework.Sprite(define.imagePath + 'HI.png');
    
    this.initialize =function(){
        
    };
    this.update = function(){
        
    };
    
    this.draw =function(ctx){
        this.HI.draw(ctx);
    };
}
Object.defineProperty(RedBall.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
    }
});
