class Main extends egret.DisplayObjectContainer{

    public constructor() {
        super();
        //创建一个界面建立后才触发事件的事件，这样时间衔接的比较好，防止界面没有出来就开始计数
        this.addEventListener( egret.Event.ADDED_TO_STAGE, this.addStage, this );
    }

    private addStage(){
        this.removeEventListener( egret.Event.ADDED_TO_STAGE, this.addStage, this );
        var game = new Game( this );
    }

}

/*
 var group:GroupRect = new GroupRect();
 this.addChild( group2 );
 group.y = Data.getRectWidth();
 group.createBlackRect();
 group.addEventListener("gameOver",this.gameOver,this);
 group.addEventListener("clickRight",this.clickRight,this);
 */