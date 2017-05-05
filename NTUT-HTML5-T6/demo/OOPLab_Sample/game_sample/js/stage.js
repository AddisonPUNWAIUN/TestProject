var Stage = function(){

    this.load = function(){
        this.HI = new Framework.Sprite(define.imagePath + 'HI.png');
        this.HI.scale = 1;
        this.KI = new Framework.Sprite(define.imagePath + 'KI.png');
        this.KI.scale = 1;
        this.MITU = new Framework.Sprite(define.imagePath + 'MITU.png');
        this.MITU.scale = 1;
        this.HIKIRI = new Framework.Sprite(define.imagePath + 'HIKARI.png');
        this.HIKARI.scale = 1;
        this.YAMI = new Framework.Sprite(define.imagePath + 'YAMI.png');
        this.YAMI.scale = 1;
        this.HATO = new Framework.Sprite(define.imagePath + 'HATO.png');
        this.HATO.scale = 1;
    }

    this.init = function(){
        this.stageArray = [];
    	//0 HI  1KI  2MITU  3HIKARI  4YAMI  5HATO　-1 empty
    	this.stageArray.push([0,1,2,3,4,5); //1
    	this.stageArray.push([0,1,2,3,4,5); //2
        this.stageArray.push([0,1,2,3,4,5); //3
        this.stageArray.push([0,1,2,3,4,5); //4
        this.stageArray.push([0,1,2,3,4,5); //5

        for(var i=0; i<this.atageArray.length; i++){
            var line = this.stageArray[i];
            for(var j=0; j<line.length; j++){
                var tile = new MapTile();
                ile.tileType = 0;
                tile.position = {x:j,y:i}
                tile.tileType = line[j];
                this.tileArray.push(tile);
            }
        }

    };


	this.update = function(){
        for(var i=0; i<this.stageArray.length; i++){
            this.stageArray[i].update();
        }
    }
	this.draw = function(ctx) {
		// for(var i=0; i<this.mapArray.length; i++){
		// 	var line = this.mapArray[i];
		// 	for(var j=0; j<line.length; j++){
		// 		this.mapFloor.position = {x: j * 64, y: i * 64};
		// 		this.mapFloor.draw(ctx);
  //               if(line[j] === 1){
  //                   this.mapWall.position = {x: j * 64, y: i * 64};
  //                   this.mapWall.draw(ctx);
  //               }else if(line[j] === -1){
  //                   this.increaseBombNum.position = {x: j * 64, y: i * 64};
  //                   this.increaseBombNum.draw(ctx);
  //               }else if(line[j] === -2){
  //                   this.increaseBombPower.position = {x: j * 64, y: i * 64};
  //                   this.increaseBombPower.draw(ctx);
  //               }
		// 	}
		// }


        for(var i=0; i<this.tileArray.length; i++)
        {
            this.tileArray[i].draw(ctx);
        }

	}

}
