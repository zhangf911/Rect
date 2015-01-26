var RectType = (function () {
    function RectType() {
    }
    //白色可以点击的小方块类型
    RectType.CLICKABLE = "clickable";
    //黑色不可以点击的小方块类型
    RectType.NOCLICKABLE = "noclickable";
    return RectType;
})();
RectType.prototype.__class__ = "RectType";
