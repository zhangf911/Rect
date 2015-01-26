var Data = (function () {
    function Data() {
    }
    Data.getRectWidth = function () {
        if (Data._rectWidth == 0) {
            Data._rectWidth = egret.MainContext.instance.stage.stageWidth / 4;
        }
        return Data._rectWidth;
    };
    Data.getRectRow = function () {
        if (Data._rectRow == 0) {
            Data._rectRow = Math.ceil(egret.MainContext.instance.stage.stageHeight / Data.getRectWidth()) + 1;
        }
        return Data._rectRow;
    };
    //获得屏幕高度的方法
    Data.getStageHeight = function () {
        return egret.MainContext.instance.stage.stageHeight;
    };
    //获得屏幕宽度的方法
    Data._rectWidth = 0;
    //分数计数
    Data.score = 0;
    //计数和获得一个屏幕的小方块的行数
    Data._rectRow = 0;
    return Data;
})();
Data.prototype.__class__ = "Data";
