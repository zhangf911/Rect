var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TimerPanel = (function (_super) {
    __extends(TimerPanel, _super);
    function TimerPanel() {
        _super.call(this);
        this._num = 20;
        //时间计数器没触发一次时间消耗一秒，并显示在文本上面
        this._timers = 20;
        this.draw();
        this.creteTimer();
    }
    TimerPanel.prototype.draw = function () {
        this.txt = new egret.TextField();
        this.txt.width = egret.MainContext.instance.stage.stageWidth;
        this.txt.y = 100;
        this.txt.textColor = 0xff0000;
        this.txt.textAlign = egret.HorizontalAlign.CENTER;
        this.txt.text = "20:00";
        this.addChild(this.txt);
    };
    TimerPanel.prototype.creteTimer = function () {
        //计算器一秒触发一次
        this._timer = new egret.Timer(1000, this._num);
        this._timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
        this._timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.onTimerCom, this);
    };
    TimerPanel.prototype.onTimer = function () {
        this._timers -= 1;
        this.txt.text = this._timers + ":00";
    };
    //时间走完了后触发的事件方法
    TimerPanel.prototype.onTimerCom = function () {
        this.txt.text = "00:00";
        this.dispatchEventWith("gameOver");
    };
    //时间计数开始，重新开始游戏运行的方法
    TimerPanel.prototype.start = function () {
        this.txt.text = "20:00";
        this._timers = 20;
        this._timer.reset();
        this._timer.start();
    };
    //时间计数停止，点击错误停止游戏运行
    TimerPanel.prototype.stop = function () {
        this._timer.stop();
        this.txt.text = "";
    };
    return TimerPanel;
})(egret.Sprite);
TimerPanel.prototype.__class__ = "TimerPanel";
