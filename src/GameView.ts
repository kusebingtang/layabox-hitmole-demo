/*
* name;
* GameView
*/
class GameView extends ui.GameUIUI{
    private moles:Array<Mole>;
    private moleNum:number = 9;  //9个树洞
    constructor(){
        super();

        this.timeBar.value = 1.0  // 设置倒计时 时间progressbar

        this.moles = new Array<Mole>();
        for (var index = 0; index < this.moleNum; index++) {
            var box: Laya.Box = this.getChildByName("item"+index) as Laya.Box;

            var normalState: Laya.Image =  box.getChildByName("normal") as Laya.Image;
            var hitState: Laya.Image = box.getChildByName("hit") as Laya.Image;
            var mole = new Mole(normalState,hitState,21);

            this.moles.push(mole);
        }
        Laya.timer.loop(1000,this,this.onLoop);
        
    }

    onLoop(): void {
        
        this.timeBar.value -= (1/90);
        if(this.timeBar.value<=0){
            this.gameOver();
            return;
        }

        var index:number = Math.floor(Math.random()*this.moleNum)
        var mole = this.moles[index];
        mole.show();
    }

    gameOver(): void {
        Laya.timer.clear(this,this.onLoop);
        console.log("游戏结束！！！！")
    }

}