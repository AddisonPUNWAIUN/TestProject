//由於JS尚未支援Class(ECMAScript 6以後, 宣稱會支援)
//目前Class寫法都是以function的方式
//只要是this.XXX皆會是Public的property
var HP = function(who,HowMuch) {
    this.load = function(){
        this.HP = new Framework.Sprite(define.imagePath + 'Red.png');
    }
    
    };

