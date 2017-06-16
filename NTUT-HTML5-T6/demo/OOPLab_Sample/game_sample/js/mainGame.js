//當有要加關卡時, 可以使用addNewLevel
//第一個被加進來的Level就是啟動點, 所以一開始遊戲就進入MyMenu
Framework.Game.audio = new Framework.Audio({
    GameStart: {
        mp3: define.musicPath + 'GameStart.mp3',
    },
    Fight: {
        mp3: define.musicPath + 'fight.mp3',
    },
    MoveBall: {
        mp3: define.musicPath + 'moveBall.mp3',
    },
    button: {
        mp3: define.musicPath + 'button.mp3',
    },
    button2: {
        mp3: define.musicPath + 'button2.wav',
    },
    button3: {
        mp3: define.musicPath + 'button3.mp3',
    },
    gameover: {
        mp3: define.musicPath + 'gameover.mp3',
    },
    gameclear: {
        mp3: define.musicPath + 'gameclear.mp3',
    }
});

Framework.Game.addNewLevel({menu: new MyMenu()});
Framework.Game.addNewLevel({ChooseCharacter: new ChooseCharacter()});
Framework.Game.addNewLevel({choosegame: new choosegame()});
Framework.Game.addNewLevel({level1: new MyGame()});
Framework.Game.addNewLevel({teach: new teach()});

//讓Game開始運行
Framework.Game.start();
