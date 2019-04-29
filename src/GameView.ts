/*
* name;
* GameView
*/
class GameView extends ui.GameUIUI{
    private mole:Mole;
    constructor(){
        super();
        //this.mole = new Mole(this.normal,this.hit,21);
        Laya.timer.loop(2000,this,this.onLoop);
        
    }

    onLoop(): void {
        //this.mole.show();
    }
}