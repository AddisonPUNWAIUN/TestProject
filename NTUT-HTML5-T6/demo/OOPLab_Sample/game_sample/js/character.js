//由於JS尚未支援Class(ECMAScript 6以後, 宣稱會支援)
//目前Class寫法都是以function的方式
//只要是this.XXX皆會是Public的property
var Character = function() {

    this.getHP =function(numbering){//return character HP
        switch (numbering) {
            case 0:
                return 2145;//HP
                break;
            case 1:
                return 1612;
                break;
            case 2:
                return 2651;
                break;
            case 3:
                return 1581;
                break;
            case 4:
                return 2310;//HP
                break;
            case 5:
                return 2700;
                break;
            case 6:
                return 1598;
                break;
            case 7:
                return 2218;//HP
                break;
            case 8:
                return 2063;//HP
                break;
            case 9:
                return 2155;//HP
                break;
            default:
                return 0;

        }

    };
    this.RE =function(numbering){//return character 回復
        switch (numbering) {
            case 0:
                return 231;//life
                break;
            case 1:
                return 244;
                break;
            case 2:
                return 166;
                break;
            case 3:
                return 226;
                break;
            case 4:
                return 198;
                break;
            case 5:
                return 0;
                break;
            case 6:
                return 0;
                break;
            case 7:
                return 372;
                break;
            case 8:
                return 253;
                break;
            case 9:
                return 372;
                break;
            default:
                return 0;
        }
    };

    this.atk0 =function(numbering){//return character atk(火）
        switch (numbering) {
            case 0:
                return 1114;
                break;
            case 1:
                return 1816;
                break;
            default:
                return 0;
        }
    };

    this.atk2 =function(numbering){//return character atk(水）
        switch (numbering) {
            case 2:
                return 1202;
                break;
            case 3:
                return 1857;
                break;
            default:
                return 0;
        }
    };

    this.atk4 =function(numbering){//return character atk(暗）
        switch (numbering) {
            case 4:
                return 1254;
                break;
            case 5:
                return 1330;
                break;
            default:
                return 0;

        }

    };

    this.atk1 =function(numbering){//return character atk(木）
        switch (numbering) {
            case 6:
                return 626;
                break;
            case 7:
                return 922;
                break;
            default:
                return 0;

        }

    };

    this.atk3 =function(numbering){//return character atk(光）
        switch (numbering) {
            case 8:
                return 1073;
                break;
            case 9:
                return 951;
                break;
            default:
                return 0;

        }

    };

    this.atk =function(numbering){
    switch (numbering) {
         case 0:
         return 1114;

         break;
         case 1:
         return 1816;
         break;
         case 2:
         return 1202;
         break;
         case 3:
         return 1857;
         break;
         case 4:
         return  1254;
         break;
         case 5:
         return 1330;
         break;
         case 6:
         return 626;
         break;
         case 7:
         return 922;//ATK
         break;
         case 8:
         return 1073;//ATK
         break;
         case 9:
         return 951;
         break;
         default:
         return 0;

         }
    }

    this.skill =function(numbering){//return skill

        switch (numbering) {
            case 0:
                return this.data = [1,5,1,0];

                break;
            case 1:
               return this.data = [0,3,5];
                break;
            case 2:
                return this.data = [1,5,0,5];
                break;
            case 3:
                return this.data = [1,5,0,2];
                break;
            case 4:
                return this.data = [2,10,4];
                break;
            case 5:
                return this.data = [1,5,1,4];
                break;
            case 6:
                return this.data = [3,6,20];
                break;
            case 7:
                return this.data = [4,7];
                break;
            case 8:
                return this.data = [3,6,20];
                break;
            case 9:
                return this.data = [0,0,40];
                break;
            default:
                return this.data = [-1];
        }
    }
};
