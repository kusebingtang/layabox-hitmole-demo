/*
* name;
* GameView
*/
class GameView extends ui.GameUIUI{
    private moles:Array<Mole>;
    private moleNum:number = 9;  //9个树洞

    private score:number;       //游戏得分

    constructor(){
        super();

        this.timeBar.value = 1.0  // 设置倒计时 时间progressbar
        this.score = 0;
        this.updateGameScoreUI();

        //once 是否只执行一次，如果为true，回调后执行recover()进行回收，默认为true。
        var hitCallBackHd:Laya.Handler = Laya.Handler.create(this,this.setScore,null,false);

        this.moles = new Array<Mole>();
        for (var index = 0; index < this.moleNum; index++) {
            var box: Laya.Box = this.getChildByName("item"+index) as Laya.Box;

            var normalState: Laya.Image =  box.getChildByName("normal") as Laya.Image;
            var hitState: Laya.Image = box.getChildByName("hit") as Laya.Image;
            var mole = new Mole(normalState,hitState,21,hitCallBackHd);

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

    setScore(type:number):void{
        this.score += (type==1?-100:100);
        if(this.score<0)this.score=0;
        this.updateGameScoreUI();
    }


    updateGameScoreUI(): void {
        var data:any = {};
        var tempNumber:number = this.score;

        for (var index = 9; index >=0; index--) {
            data["item"+index]={index:Math.floor(tempNumber%10)};
            tempNumber/=10;
        }
        this.scoreNums.dataSource = data;
    }






}