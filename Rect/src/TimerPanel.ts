class TimerPanel extends egret.Sprite{
    public constructor(){
        super();
        this.draw();
        this.creteTimer();
    }

    //计算器时间显示的文本
    private txt:egret.TextField;
    private draw(){
        this.txt = new egret.TextField();
        this.txt.width = egret.MainContext.instance.stage.stageWidth;
        this.txt.y = 100;
        this.txt.textColor = 0xff0000;
        this.txt.textAlign = egret.HorizontalAlign.CENTER;
        this.txt.text = "20:00";
        this.addChild( this.txt );
    }

    //计算器的创建和触发后的处理
    private _timer:egret.Timer;
    private _num = 20;
    private creteTimer(){
        //计算器一秒触发一次
        this._timer = new egret.Timer( 1000,this._num );
        this._timer.addEventListener( egret.TimerEvent.TIMER, this.onTimer, this );
        this._timer.addEventListener( egret.TimerEvent.TIMER_COMPLETE, this.onTimerCom, this );
    }

    //时间计数器没触发一次时间消耗一秒，并显示在文本上面
    private _timers = 20;
    private onTimer(){
        this._timers -= 1;
        this.txt.text = this._timers + ":00";
    }

    //时间走完了后触发的事件方法
    private onTimerCom(){
        this.txt.text = "00:00";
        this.dispatchEventWith( "gameOver" );
    }

    //时间计数开始，重新开始游戏运行的方法
    public start(){
        this.txt.text = "20:00";
        this._timers = 20;
        this._timer.reset();
        this._timer.start();
    }

    //时间计数停止，点击错误停止游戏运行
    public stop(){
        this._timer.stop();
        this.txt.text = "";
    }

}