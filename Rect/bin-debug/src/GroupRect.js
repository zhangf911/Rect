var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GroupRect = (function (_super) {
    __extends(GroupRect, _super);
    function GroupRect() {
        _super.call(this);
        //点击矩形方块的点击事件方法
        this._currentRow = 0;
        //4个小矩形为一组，一组中随机生成一个为黑色可点击的矩形
        this._currentBlackRectIndex = 0;
        this.createRects();
    }
    GroupRect.prototype.createRects = function () {
        this._rects = [];
        for (var i = 0; i < 4; i++) {
            var rect = new Rect();
            this._rects.push(rect);
            rect.x = rect.width * i;
            this.addChild(rect);
            rect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickRect, this);
        }
    };
    GroupRect.prototype.onClickRect = function (evt) {
        evt.target.onRectClick();
        if (evt.target.type == RectType.NOCLICKABLE || this._currentRow != (Data.getRectRow() - 2)) {
            this.dispatchEventWith("gameOver");
        }
        else {
            this.dispatchEventWith("clickRight");
        }
    };
    GroupRect.prototype.createBlackRect = function () {
        this.init();
        var blackRectIndex = ~~(Math.random() * 4);
        this._currentBlackRectIndex = blackRectIndex;
        this._rects[this._currentBlackRectIndex].type = RectType.CLICKABLE;
    };
    //初始化小方块，是所有为不可以点击小方块，再根据createBlackRect（）方法生成黑色方块
    GroupRect.prototype.init = function () {
        for (var i = 0; i < 4; i++) {
            this._rects[i].type = RectType.NOCLICKABLE;
        }
    };
    //点击正确后向下移动，因为在Game类中生成以GroupRect为类型的数组，在下面的在数组中数组越大，向下移动是要给前面的GroupRect加1
    GroupRect.prototype.move = function () {
        this._currentRow++;
        if (this._currentRow == Data.getRectRow()) {
            this._currentRow = 0;
            this.createBlackRect();
        }
        this.y = this._currentRow * Data.getRectWidth();
    };
    return GroupRect;
})(egret.Sprite);
GroupRect.prototype.__class__ = "GroupRect";
