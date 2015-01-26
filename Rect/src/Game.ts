class Game {
    private _root:egret.DisplayObjectContainer;
    public constructor( root:egret.DisplayObjectContainer ){
        this._root = root;
        this.createGroupsRect();
        this.createTime();
        this.startGame();
    }

    //生成游戏界面的一行一行的方块组
    private _row:number;
    private _rectRoot:egret.Sprite;
    private _rectGroups:Array<GroupRect>;
    private createGroupsRect(){
        this._rectRoot = new egret.Sprite();
        this._root.addChild( this._rectRoot );
        this._rectGroups = [];
        this._row = Data.getRectRow();

        var groupRect:GroupRect;
        for( var i=0; i<this._row; i++ ){
            groupRect = new GroupRect();
            groupRect.y = Data.getRectWidth()*i;
            this._rectGroups.push( groupRect );
            this._rectRoot.addChild( groupRect );
            //每个组监听每个小方块的点击事件抛出的事件
            groupRect.addEventListener( "gameOver", this.gameOver, this );
            groupRect.addEventListener( "clickRight", this.nextRow, this );
        }
        this._rectRoot.y = Data.getStageHeight() - this._rectRoot.height;
    }

    //点击正确后触发clickRight事件，运行nextRow进入下一步
    private nextRow(){
        for( var i=0; i<this._row; i++ ){
            this._rectGroups[i].move();
        }
        Data.score++;
    }

    //创建音乐播放器且装载音乐
    private gameSoundPanel:GameSoundPanel = new GameSoundPanel();
    //触发gameOver事件的运行方法
    private gameOverPanel:GameOverPanel;
    private gameOver(){
        //停止音乐播放，停止时间计时
        this.gameSoundPanel.pause();
        this._timerPanel.stop();
        //游戏结束，给每个小方块去掉点击功能
        for( var i=0; i<this._row; i++ ){
            for( var j=0; j<4; j++ ) {
                this._rectGroups[i]._rects[j].touchEnabled = false;
            }
        }
        if( !this.gameOverPanel ){
            this.gameOverPanel = new GameOverPanel();
            //点击重新开始，触发startGame事件游戏startGame()重新进入游戏
            this.gameOverPanel.addEventListener( "startGame", this.startGame, this );
        }
        this._root.addChild( this.gameOverPanel );
    }

    //创建时间计算器
    private _timerPanel:TimerPanel;
    private createTime(){
        this._timerPanel = new TimerPanel();
        this._timerPanel.addEventListener( "gameOver", this.gameOver, this );
        this._root.addChild( this._timerPanel );
    }


    //点击重新开始游戏，进入重新游戏
    private startGame(){
        //判断游戏音乐是否播放，是播放状态就不再需要运行播放音乐了
        if( this.gameSoundPanel._soundStart == 0 ){
            this.gameSoundPanel.play();
        }
        Data.score = 0;
        //游戏重新开始，给每个小方块加上可点击功能
        for( var i=0; i<this._row; i++ ){
            for( var j=0; j<4; j++ ) {
                this._rectGroups[i]._rects[j].touchEnabled = true;
            }
        }

        for( var i=0; i<this._row; i++ ){
            this._rectGroups[i].init();
            this._rectGroups[i].y = Data.getRectWidth()*i;
            this._rectGroups[i]._currentRow = i;
            //生成最后没有黑色方块的一行和生成其他有黑色方块的行
            if( i != (this._row - 1) ){
                this._rectGroups[i].createBlackRect();
            }
        }
        this._timerPanel.start();
    }

}