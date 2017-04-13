//由於JS尚未支援Class(ECMAScript 6以後, 宣稱會支援)
//目前Class寫法都是以function的方式
//只要是this.XXX皆會是Public的property
var MoveBall = function(file, intex) {
    this.url = file;      
    //AnimationSprite當圖片是一整張圖片(連續圖), 而非Array時一定要給col, row三個(url是一定要的)   
    this.sprite = new Framework.AnimationSprite({url:this.url, col:1 , row:1 , loop:true , speed:12});
    this.sprite.scale = 2;
    this.sprite.index = 1;
    var PIXEL_CONST = 64;
    //this.sprite.start({ from: 0, to: 2, loop: true});
    this.mapPosition = {x:0, y:0};
    this.spritePosition = {x:0, y:0};
    this.constants = new Constants();

    this.StepMovedCallBack = [];

    this.ballType = this.constants.DirectionEnum.DOWN;
    //以下這句話的意思是當options.position為undefined時this.sprite.position = x: 0, y: 0}
    //若options.position有值, 則this.sprite.position = options.position
    //原因是在JS中, undefined會被cast成false
    this.sprite.position = options.position || {x: 0, y: 0};
    this.sprite.scale = options.scale || 1;

    //由於0會被cast成false, 故不能用上面的方法來簡化
    //this.sprite.rotation = (Framework.Util.isUndefined(options.rotation))?0:options.rotation;


    //moveStep為位移量  格式範例{x:1,y:0}
    this.move = function(e,intex){
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
        this.mapPosition = e;
        }
    }

    this.update = function(){
        this.sprite.update();
        this.sprite.index = this.ballType;
    }


    this.draw = function(ctx){
        this.sprite.position = {x: this.spritePosition.x, y: this.spritePosition.y};
        this.sprite.draw(ctx);
    }

};

Object.defineProperty(MoveBall.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.spritePosition = {x:this.mapPosition.x * 100, y: this.mapPosition.y * 100};
    }
}); 
