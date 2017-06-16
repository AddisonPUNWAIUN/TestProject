//由於JS尚未支援Class(ECMAScript 6以後, 宣稱會支援)
//目前Class寫法都是以function的方式
//只要是this.XXX皆會是Public的property
var pt = function() {

  this.member = new Character();


this.ptHP =function(){//Get HP
    var data=0;
    console.log(data);

    for(var i=0;i<6;i++){
        data=data+this.member.getHP(temp[i]) ;
        console.log(data,temp[i]);
            }
    
    return data;
};
this.ptRE =function(){//Get 回復
    var data=0;
    for(var i=0;i<6;i++){
        data= data+this.member.RE(temp[i]) ;
        console.log(temp[i]);
    }
    return data;
};
this.ptatk0 =function(){//get 火攻擊
    var data=0;
    for(var i=0;i<6;i++){
        data= data+this.member.atk0(temp[i]) ;
    }
    return data;
};

this.ptatk1 =function(){//get 木攻擊
    var data=0;
    for(var i=0;i<6;i++){
        data= data+this.member.atk1(temp[i]) ;
    }
    return data;
};

this.ptatk2 =function(){//get 水攻擊
    var data=0;
    for(var i=0;i<6;i++){
        data= data+this.member.atk2(temp[i]) ;
    }
    return data;
};

this.ptatk3 =function(){//get 光攻擊
    var data=0;
    for(var i=0;i<6;i++){
        data= data+this.member.atk3(temp[i]) ;
    }
    return data;
};

this.ptatk4 =function(){//get 暗攻擊
    var data=0;
    for(var i=0;i<6;i++){
        data= data+this.member.atk4(temp[i]) ;
    }
    return data;
};

}
