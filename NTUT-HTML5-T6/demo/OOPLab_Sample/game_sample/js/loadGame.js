//立即執行函式, 並封裝所有變數避免衝突
var loadGameEnd;
var temp=[-1,-1,-1,-1,-1,-1];//組員
var gameboss=1;//遊戲boss
var Iseasy=0;//難度
(function(){
    //動態依序載入JS
    //ref: http://blog.darkthread.net/blogs/darkthreadtw/archive/2009/01/15/4061.aspx
    var  importJS = function(jsConf, src, lookFor) {
        var headID = document.getElementsByTagName("head")[0];
        var newJs = document.createElement('script');
        newJs.type = 'text/javascript';
        newJs.src= jsConf[0].src;
        headID.appendChild(newJs);
        wait_for_script_load(jsConf, function() {
            jsConf.splice(0, 1);
            if(jsConf.length > 0) {
                importJS(jsConf, lookFor);
            }else
			{
				loadGameEnd = true;
			}
        });
    }

    var wait_for_script_load = function(jsConf, callback) {
        var interval = setInterval(function() {
            if (typeof jsConf[0].lookFor === 'undefined') {
                jsConf[0].lookFor = '';
            }

            if (jsConf[0].lookFor === '') {
                clearInterval(interval);
                callback();
            } else if (eval("typeof " + jsConf[0].lookFor) !== 'undefined') {
                    clearInterval(interval);
                    callback();
                }
            }, 50);
    }

    //陣列和載入JS檔的順序相同, lookFor為在要載入的檔案中,
    //有用到的全域變數, importJS這個function, 會在找到lookFor的變數後
    //才會繼續loading下一個檔案, 如果沒有需要lookFor, 則以空字串代表
    var listScript =
    [

        { src: 'game_sample/js/define.js', lookFor: 'define' },
        { src: 'game_sample/js/myMenu.js', lookFor: 'MyMenu' },
        { src: 'game_sample/js/teach.js', lookFor: 'teach' },
        { src: 'game_sample/js/chooseGame.js', lookFor: 'choosegame' },
        { src: 'game_sample/js/ChooseCharacter.js', lookFor: 'ChooseCharacter' },
        { src: 'game_sample/js/PT.js', lookFor: 'pt' },
        { src: 'game_sample/js/Map.js', lookFor: 'GameMap' },
        { src: 'game_sample/js/character_pic.js', lookFor: 'character_pic' },
        { src: 'game_sample/js/character.js', lookFor: 'Character' },
        { src: 'game_sample/js/boss.js', lookFor: 'boss' },
        { src: 'game_sample/js/moveBall.js', lookFor: 'MoveBall' },
        { src: 'game_sample/js/stage.js', lookFor: 'Stage' },
        { src: 'game_sample/js/myGameLevel1.js', lookFor: 'MyGame' },
        { src: 'game_sample/js/mainGame.js'}
    ]
    importJS(listScript);
})();
