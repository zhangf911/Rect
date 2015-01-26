class Data {
    //获得屏幕宽度的方法
    private static _rectWidth:number = 0;
    public static getRectWidth():number{
        if( Data._rectWidth == 0 ){
            Data._rectWidth = egret.MainContext.instance.stage.stageWidth/4;
        }
        return Data._rectWidth;
    }

    //分数计数
    public static score:number = 0;

    //计数和获得一个屏幕的小方块的行数
    private static _rectRow:number = 0;
    public static getRectRow():number{
        if( Data._rectRow == 0 ){
            Data._rectRow = Math.ceil( egret.MainContext.instance.stage.stageHeight/Data.getRectWidth() ) + 1;
        }
        return Data._rectRow;
    }

    //获得屏幕高度的方法
    public static getStageHeight():number{
        return egret.MainContext.instance.stage.stageHeight;
    }

}
