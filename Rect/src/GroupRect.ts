class GroupRect extends egret.Sprite{
    public constructor(){
        super();
        this.createRects();
    }

    //创建一个小方块组，以Rect为类型创建数组
    public _rects:Array<Rect>;
    private createRects(){
        this._rects = [];
        //在这里创建游戏中的一行
        for( var i=0; i<4; i++ ){
            var rect:Rect = new Rect();
            this._rects.push( rect );
            rect.x = rect.width*i;
            this.addChild( rect );
            rect.addEventListener( egret.TouchEvent.TOUCH_TAP,this.onClickRect,this );
        }
    }

    //点击矩形方块的点击事件方法
    public _currentRow:number = 0;
    private onClickRect( evt:egret.TouchEvent ){
        evt.target.onRectClick();
        if( evt.target.type == RectType.NOCLICKABLE || this._currentRow != (Data.getRectRow()-2) ){
            this.dispatchEventWith("gameOver");
        }else{
            this.dispatchEventWith("clickRight");
        }
    }

    //4个小矩形为一组，一组中随机生成一个为黑色可点击的矩形
    private _currentBlackRectIndex:number = 0;
    public createBlackRect(){
        this.init();
        var blackRectIndex:number = ~~( Math.random() * 4 );
        this._currentBlackRectIndex = blackRectIndex;
        this._rects[this._currentBlackRectIndex].type = RectType.CLICKABLE;
    }

    //初始化小方块，是所有为不可以点击小方块，再根据createBlackRect（）方法生成黑色方块
    public init(){
        for( var i=0; i<4; i++ ){
            this._rects[i].type = RectType.NOCLICKABLE;
        }
    }

    //点击正确后向下移动，因为在Game类中生成以GroupRect为类型的数组，在下面的在数组中数组越大，向下移动是要给前面的GroupRect加1
    public move(){
        this._currentRow++;
        if( this._currentRow == Data.getRectRow() ){
            this._currentRow = 0;
            this.createBlackRect();
        }
        this.y = this._currentRow*Data.getRectWidth();
    }

}