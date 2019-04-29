
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class GameUIUI extends View {
		public normal:Laya.Image;
		public hit:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":25,"x":25,"skin":"ui/back.png"}},{"type":"Box","props":{"y":193,"x":156},"child":[{"type":"Image","props":{"x":6,"var":"normal","skin":"ui/mouse_normal_1.png"}},{"type":"Image","props":{"y":85,"skin":"ui/mask-01.png"}},{"type":"Image","props":{"y":14,"x":3,"var":"hit","skin":"ui/mouse_hit_1.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameUIUI.uiView);

        }

    }
}
