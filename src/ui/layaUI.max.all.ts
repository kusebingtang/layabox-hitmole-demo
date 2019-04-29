
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class GameUIUI extends View {
		public timeBar:Laya.ProgressBar;
		public scoreNums:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":25,"x":25,"skin":"ui/back.png"}},{"type":"Box","props":{"y":193,"x":156,"name":"item0"},"child":[{"type":"Image","props":{"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":85,"skin":"ui/mask-01.png"}},{"type":"Image","props":{"y":14,"x":3,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":0,"x":6,"skin":"ui/score_1.png","name":"score"}}]},{"type":"Box","props":{"y":188,"x":345,"name":"item1"},"child":[{"type":"Image","props":{"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":85,"skin":"ui/mask-02.png"}},{"type":"Image","props":{"y":14,"x":3,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":0,"x":6,"skin":"ui/score_1.png","name":"score"}}]},{"type":"Box","props":{"y":198,"x":542,"name":"item2"},"child":[{"type":"Image","props":{"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":85,"skin":"ui/mask-03.png"}},{"type":"Image","props":{"y":14,"x":3,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":0,"x":6,"skin":"ui/score_1.png","name":"score"}}]},{"type":"Box","props":{"y":283,"x":126,"name":"item3"},"child":[{"type":"Image","props":{"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":85,"skin":"ui/mask-04.png"}},{"type":"Image","props":{"y":14,"x":3,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":0,"x":6,"skin":"ui/score_1.png","name":"score"}}]},{"type":"Box","props":{"y":284,"x":345,"name":"item4"},"child":[{"type":"Image","props":{"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":85,"skin":"ui/mask-05.png"}},{"type":"Image","props":{"y":14,"x":3,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":0,"x":6,"skin":"ui/score_1.png","name":"score"}}]},{"type":"Box","props":{"y":281,"x":544,"name":"item5"},"child":[{"type":"Image","props":{"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":85,"skin":"ui/mask-06.png"}},{"type":"Image","props":{"y":14,"x":3,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":0,"x":6,"skin":"ui/score_1.png","name":"score"}}]},{"type":"Box","props":{"y":382,"x":122,"name":"item6"},"child":[{"type":"Image","props":{"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":85,"skin":"ui/mask-07.png"}},{"type":"Image","props":{"y":14,"x":3,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":0,"x":6,"skin":"ui/score_1.png","name":"score"}}]},{"type":"Box","props":{"y":386,"x":349,"name":"item7"},"child":[{"type":"Image","props":{"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":85,"skin":"ui/mask-08.png"}},{"type":"Image","props":{"y":14,"x":3,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":0,"x":6,"skin":"ui/score_1.png","name":"score"}}]},{"type":"Box","props":{"y":384,"x":565,"name":"item8"},"child":[{"type":"Image","props":{"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":85,"skin":"ui/mask-09.png"}},{"type":"Image","props":{"y":14,"x":3,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":0,"x":6,"skin":"ui/score_1.png","name":"score"}}]},{"type":"ProgressBar","props":{"y":7,"x":11,"var":"timeBar","value":1,"skin":"ui/progress_time.png"}},{"type":"Box","props":{"y":50,"x":28,"var":"scoreNums"},"child":[{"type":"Clip","props":{"skin":"ui/clip_number.png","name":"item0","index":9,"clipX":10}},{"type":"Clip","props":{"x":18,"skin":"ui/clip_number.png","name":"item1","index":8,"clipX":10}},{"type":"Clip","props":{"x":36,"skin":"ui/clip_number.png","name":"item2","index":7,"clipX":10}},{"type":"Clip","props":{"x":54,"skin":"ui/clip_number.png","name":"item3","index":6,"clipX":10}},{"type":"Clip","props":{"x":72,"skin":"ui/clip_number.png","name":"item4","index":5,"clipX":10}},{"type":"Clip","props":{"x":90,"skin":"ui/clip_number.png","name":"item5","index":4,"clipX":10}},{"type":"Clip","props":{"x":108,"skin":"ui/clip_number.png","name":"item6","index":3,"clipX":10}},{"type":"Clip","props":{"x":126,"skin":"ui/clip_number.png","name":"item7","index":2,"clipX":10}},{"type":"Clip","props":{"x":144,"skin":"ui/clip_number.png","name":"item8","index":1,"clipX":10}},{"type":"Clip","props":{"x":162,"skin":"ui/clip_number.png","name":"item9","index":0,"clipX":10}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameUIUI.uiView);

        }

    }
}

module ui {
    export class HammerUI extends View {
		public hit:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":100},"child":[{"type":"Image","props":{"y":60,"x":56,"width":98,"skin":"ui/hammer.png","pivotY":49,"pivotX":55,"height":77},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":58,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0}],"x":[{"value":60,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":58,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":1},{"value":60,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":5}],"rotation":[{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":0},{"value":-20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":1},{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":5}]}}],"name":"hit","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.HammerUI.uiView);

        }

    }
}
