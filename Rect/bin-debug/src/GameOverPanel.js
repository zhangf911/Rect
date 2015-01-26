var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GameOverPanel = (function (_super) {
    __extends(GameOverPanel, _super);
    function GameOverPanel() {
        _super.call(this);
        this.draw();
        this.addEventListener(egret.Event.ADDED, this.showText, this);
    }
    GameOverPanel.prototype.draw = function () {
        var w = egret.MainContext.instance.stage.stageWidth;
        var h = egret.MainContext.instance.stage.stageHeight;
        this.graphics.beginFill(0x111111, 0.5);
        this.graphics.drawRect(0, 0, w, h);
        this.graphics.endFill();
        //创建用来显示成绩的文本
        this.txt = new egret.TextField();
        this.txt.width = w;
        this.txt.textColor = 0xff0000;
        this.txt.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.txt);
        this.txt.italic = true;
        //在点击重新开始游戏的控件里面显示一个"重新开始"的文本
        var txtRestart = new egret.TextField();
        txtRestart.text = "重新开始";
        txtRestart.x = (200 - txtRestart.width) / 2;
        txtRestart.y = (100 - txtRestart.height) / 2;
        txtRestart.textColor = 0xff0000;
        txtRestart.strokeColor = 0xffffff;
        //加描边，斜体
        txtRestart.stroke = 1;
        txtRestart.italic = true;
        //创建点击重新开始游戏的控件
        var btn = new egret.Sprite();
        btn.graphics.beginFill(0x0000ff);
        btn.graphics.drawRect(0, 0, 200, 100);
        btn.graphics.endFill();
        btn.width = 200;
        btn.height = 100;
        btn.x = (w - 200) / 2;
        btn.y = (h - 100) / 2;
        this.addChild(btn);
        btn.touchEnabled = true;
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this);
        btn.addChild(txtRestart);
    };
    //游戏结束后显示成绩
    GameOverPanel.prototype.showText = function () {
        this.scoreTextMove();
        this.txt.text = "恭喜您点击了" + Data.score + "步";
    };
    //点击重新开始触发事件游戏startGame重新开始游戏
    GameOverPanel.prototype.startGame = function () {
        this.parent.removeChild(this);
        this.dispatchEventWith("startGame");
    };
    GameOverPanel.prototype.scoreTextMove = function () {
        this.txt.y = egret.MainContext.instance.stage.stageHeight;
        //将显示成绩是文字创建一个移动的效果
        var tween = egret.Tween.get(this.txt);
        tween.to({ y: 100 }, 500);
    };
    return GameOverPanel;
})(egret.Sprite);
GameOverPanel.prototype.__class__ = "GameOverPanel";
