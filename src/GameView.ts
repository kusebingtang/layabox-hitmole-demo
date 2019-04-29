/*
* name;
* GameView
*/
class GameView extends ui.GameUIUI{
    private moles:Array<Mole>;
    private moleNum:number = 9;  //9个树洞
    constructor(){
        super();
        this.moles = new Array<Mole>();
        for (var index = 0; index < this.moleNum; index++) {
            var box: Laya.Box = this.getChildByName("item"+index) as Laya.Box;

            var normalState: Laya.Image =  box.getChildByName("normal") as Laya.Image;
            var hitState: Laya.Image = box.getChildByName("hit") as Laya.Image;
            var mole = new Mole(normalState,hitState,21);

            this.moles.push(mole);
        }
        Laya.timer.loop(2000,this,this.onLoop);
        
    }

    onLoop(): void {
        var index:number = Math.floor(Math.random()*this.moleNum)
        var mole = this.moles[index];
        mole.show();
    }
}