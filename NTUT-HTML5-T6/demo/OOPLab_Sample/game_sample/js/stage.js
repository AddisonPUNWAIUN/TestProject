var Stage = function(){
   // this.StageAway= [[1,2],[2,3,1];


    this.load = function(){
    };

    this.update = function(){
    };

    this.getboss = function() {
           return 2;
    };

    this.bossAtk = function(input) {
        if(Iseasy===0){
            if(input===0){
                return 3000;
            }
            if(input===1){
                return 6000;
            }
            if(input===2){
                return 30000;
            }
        }
        if(Iseasy===1){
            if(input===0){
                return 1000;
            }
            if(input===1){
                return 3000;
            }
            if(input===2){
                return 3000;
            }
        }
    };
    this.bossHp = function(input) {
         if(Iseasy===0){
            if(input===0){
                return 200000;
            }
            if(input===1){
                return 300000;
            }
             if(input===2){
                 return 250000;
             }
        }
        if(Iseasy===1){
            if(input===0){
                return 100000;
            }
            if(input===1){
                return 150000;
            }
            if(input===2){
                return 170000;
            }
        }
    };
    this.bossCd = function(input) {
        if(Iseasy===0){
            if(input===0){
                return 1;
            }
            if(input===1){
                return 2;
            }
            if(input===2){
                return 10;
            }

        }
        if(Iseasy===1){
            if(input===0){
                return 2;
            }
            if(input===1){
                return 3;
            }
            if(input===2){
                return 3;
            }
        }
    };

}
