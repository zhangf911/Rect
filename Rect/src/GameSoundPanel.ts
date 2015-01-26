class GameSoundPanel extends egret.Sprite {
    //用来标记是否在播放音乐
    public _soundStart:number = 1;
    public constructor(){
        super();
        this.onAddSoundRes();
    }

    private onAddSoundRes(){
        //初始化Resource资源加载库，提示：Resource资源加载库是可选模块，不在egret-core项目里，最新代码请到github上的egret-game-library项目检出。
        RES.addEventListener( RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this );
        RES.loadConfig( "resource/resource.json", "resource/" );
        RES.loadGroup( "soundLoad" );
    }

    //soundload资源组加载完成
    private _curSound:egret.Sound;
    private onResourceLoadComplete( event:RES.ResourceEvent ):void {
        this._curSound = RES.getRes( "paoPaoTang" );
        this.play();
    }

    public play(){
        this._soundStart = 1;
        this._curSound.play();
        this._curSound.addEventListener( "ended", this.rePlay.bind( this ) );
    }

    public pause(){
        this._curSound.pause();
        this._soundStart = 0;
    }

    private rePlay(){
        this._curSound.load();
        this._curSound.play();
    }

}