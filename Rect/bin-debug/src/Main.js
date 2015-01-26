var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        //创建一个界面建立后才触发事件的事件，这样时间衔接的比较好，防止界面没有出来就开始计数
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addStage, this);
    }
    Main.prototype.addStage = function () {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addStage, this);
        var game = new Game(this);
    };
    return Main;
})(egret.DisplayObjectContainer);
Main.prototype.__class__ = "Main";
