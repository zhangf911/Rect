var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GameSoundPanel = (function (_super) {
    __extends(GameSoundPanel, _super);
    function GameSoundPanel() {
        _super.call(this);
        //用来标记是否在播放音乐
        this._soundStart = 1;
        this.onAddSoundRes();
    }
    GameSoundPanel.prototype.onAddSoundRes = function () {
        //初始化Resource资源加载库，提示：Resource资源加载库是可选模块，不在egret-core项目里，最新代码请到github上的egret-game-library项目检出。
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.loadConfig("resource/resource.json", "resource/");
        RES.loadGroup("soundLoad");
    };
    GameSoundPanel.prototype.onResourceLoadComplete = function (event) {
        this._curSound = RES.getRes("paoPaoTang");
        this.play();
    };
    GameSoundPanel.prototype.play = function () {
        this._soundStart = 1;
        this._curSound.play();
        this._curSound.addEventListener("ended", this.rePlay.bind(this));
    };
    GameSoundPanel.prototype.pause = function () {
        this._curSound.pause();
        this._soundStart = 0;
    };
    GameSoundPanel.prototype.rePlay = function () {
        this._curSound.load();
        this._curSound.play();
    };
    return GameSoundPanel;
})(egret.Sprite);
GameSoundPanel.prototype.__class__ = "GameSoundPanel";
