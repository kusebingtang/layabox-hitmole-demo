import WebGL = Laya.WebGL;
// 程序入口
class GameMain{
    constructor()
    {
        Laya.init(800,600, WebGL);
        Laya.stage.bgColor ="ffcccc";
        var resArray: Array<any> = [
            {url:"res/atlas/ui.atlas",type:Laya.Loader.ATLAS},
            {url:"ui/back.png",type:Laya.Loader.IMAGE}
        ];

        Laya.loader.load(resArray,Laya.Handler.create(this,this.onLoaded));
    }

    onLoaded(): void {
        var gameView : GameView = new GameView();
        Laya.stage.addChild(gameView)
    }


}
new GameMain();