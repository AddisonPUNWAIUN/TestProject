//由於JS尚未支援Class(ECMAScript 6以後, 宣稱會支援)
//目前Class寫法都是以function的方式
//只要是this.XXX皆會是Public的property
var Character = function(file, numbering) {
    this.url = file;
    switch numbering) {
      case 0:
        this.data[0] = 2145;//HP
        this.data[2] = 1114;//ATK
        this.data[3] = 231;//life
        this.data[4] = 7;//skill CD
        this.skil[0] = 2;//skill num
        this.skil[1] = 1;//skill type 1=now atk
        this.skil[2] = 1114*20;
        this.skil[3] = 2;//skill typ 2=atk up
        this.skil[4] = 2;
        this.skil[5] = 0;
        this.skil[6] = 1.5;
        break;
      case 1:
       this.data[0] = 1612;
       this.data[2] = 1816;
       this.data[3] = 244;
       this.data[4] = 2;
       this.skil[0] = 1;
       this.skil[1] = 1;
       this.skil[2] = 1816*5;
        break;
      case 2:
      this.data[0] = 2651;
      this.data[2] = 1202;
      this.data[3] = 166;
      this.data[4] = 6;
      this.skil[0] = 2;
      this.skil[1] = 1;
      this.skil[2] = 20000;
      this.skil[3] = 3;//skill type 3 = switch color
      this.skil[4] = 3;
      this.skil[5] = 1;
        break;
      case 3:
       this.data[0] = 1581;
       this.data[2] = 1857;
       this.data[3] = 226;
       this.data[4] = 2;
       this.skil[0] = 1;
       this.skil[1] = 1;
       this.skil[2] = 1857*5;
        break;
      case 4:
      this.data[0] = 2310;//HP
      this.data[2] = 1254;//ATK
      this.data[3] = 198;//life
      this.data[4] = 7;//skill CD
      this.skil[0] = 2;//skill num
      this.skil[1] = 1;//skill type 1=now atk
      this.skil[2] = 1254*20;
      this.skil[3] = 2;//skill type 2=atk up
      this.skil[4] = 2;
      this.skil[5] = 4;
      this.skil[6] = 1.5;
        break;
      case 5:
      this.data[0] = 2700;
      this.data[2] = 1330;
      this.data[3] = 0;
      this.data[4] = 6;
      this.skil[0] = 1;
      this.skil[1] = 99;//skill type 99 = switch to L
        break;
      case 6:
      this.data[0] = 1598;
      this.data[2] = 626;
      this.data[3] = 0;
      this.data[4] = 5;
      this.skil[0] = 1;
      this.skil[1] = 4;//skill type 4 = hurt cut
      this.skil[2] = 2;
      this.skil[2] = 0.25;
       break;
      case 7:
       this.data[0] = 2218;//HP
       this.data[2] = 922;//ATK
       this.data[3] = 372;//life
       this.data[4] = 6;//skill CD
       this.skil[0] = 2;//skill num
       this.skil[1] = 5;//skill type 5=now heal(%)
       this.skil[2] = 0.3;
       this.skil[3] = 3;//skill type 2=atk up
       this.skil[4] = 1;
       this.skil[5] = 5;
        break;
      case 8:
      this.data[0] = 2063;//HP
      this.data[2] = 1073;//ATK
      this.data[3] = 253;//life
      this.data[4] = 7;//skill CD
      this.skil[0] = 2;//skill num
      this.skil[1] = 1;//skill type 1=now atk
      this.skil[2] = 1073*20;
      this.skil[3] = 2;//skill typ 2=atk up
      this.skil[4] = 2;
      this.skil[5] = 3;
      this.skil[6] = 1.5;
          break;
      case 9:
      this.data[0] = 2155;//HP
      this.data[2] = 951;//ATK
      this.data[3] = 372;//life
      this.data[4] = 6;//skill CD
      this.skil[0] = 2;//skill num
      this.skil[1] = 5;//skill type 5=now heal(%)
      this.skil[2] = 0.3;
      this.skil[3] = 3;//skill type 2=atk up
      this.skil[4] = 4;
      this.skil[5] = 5;
       break;
      default:

    }


};
