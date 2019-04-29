
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class GameUIUI extends View {
		public timeBar:Laya.ProgressBar;

        public static  uiView:any ={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":25,"x":25,"skin":"ui/back.png"}},{"type":"Box","props":{"y":193,"x":156,"name":"item0"},"child":[{"type":"Image","props":{"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":85,"skin":"ui/mask-01.png"}},{"type":"Image","props":{"y":14,"x":3,"skin":"ui/mouse_hit_1.png","name":"hit"}}]},{"type":"Box","props":{"y":188,"x":345,"name":"item1"},"child":[{"type":"Image","props":{"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":85,"skin":"ui/mask-02.png"}},{"type":"Image","props":{"y":14,"x":3,"skin":"ui/mouse_hit_1.png","name":"hit"}}]},{"type":"Box","props":{"y":198,"x":542,"name":"item2"},"child":[{"type":"Image","props":{"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":85,"skin":"ui/mask-03.png"}},{"type":"Image","props":{"y":14,"x":3,"skin":"ui/mouse_hit_1.png","name":"hit"}}]},{"type":"Box","props":{"y":283,"x":126,"name":"item3"},"child":[{"type":"Image","props":{"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":85,"skin":"ui/mask-04.png"}},{"type":"Image","props":{"y":14,"x":3,"skin":"ui/mouse_hit_1.png","name":"hit"}}]},{"type":"Box","props":{"y":284,"x":345,"name":"item4"},"child":[{"type":"Image","props":{"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":85,"skin":"ui/mask-05.png"}},{"type":"Image","props":{"y":14,"x":3,"skin":"ui/mouse_hit_1.png","name":"hit"}}]},{"type":"Box","props":{"y":281,"x":544,"name":"item5"},"child":[{"type":"Image","props":{"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":85,"skin":"ui/mask-06.png"}},{"type":"Image","props":{"y":14,"x":3,"skin":"ui/mouse_hit_1.png","name":"hit"}}]},{"type":"Box","props":{"y":382,"x":122,"name":"item6"},"child":[{"type":"Image","props":{"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":85,"skin":"ui/mask-07.png"}},{"type":"Image","props":{"y":14,"x":3,"skin":"ui/mouse_hit_1.png","name":"hit"}}]},{"type":"Box","props":{"y":386,"x":349,"name":"item7"},"child":[{"type":"Image","props":{"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":85,"skin":"ui/mask-08.png"}},{"type":"Image","props":{"y":14,"x":3,"skin":"ui/mouse_hit_1.png","name":"hit"}}]},{"type":"Box","props":{"y":384,"x":565,"name":"item8"},"child":[{"type":"Image","props":{"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":85,"skin":"ui/mask-09.png"}},{"type":"Image","props":{"y":14,"x":3,"skin":"ui/mouse_hit_1.png","name":"hit"}}]},{"type":"ProgressBar","props":{"y":7,"x":11,"var":"timeBar","value":1,"skin":"ui/progress_time.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameUIUI.uiView);

        }

    }
}
