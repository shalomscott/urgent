import { Component, Output, EventEmitter} from "@angular/core";
import { TouchGestureEventData, GestureEventData } from 'ui/gestures';

import { Color } from 'color';

declare const CGSizeMake: any;
declare const android: any;
@Component({
  selector: "fab",
  templateUrl: "shared/fab/fab.component.html",
  styleUrls: [ "shared/fab/fab.component.css" ]
})
export class FabComponent {
    
    @Output() tap: EventEmitter<GestureEventData> = new EventEmitter<GestureEventData>();
    
    protected get shadowColor(): Color {
        return new Color('#888888');
    }

    protected get shadowOffset() {
        return 30;
    }

    onTap(args: GestureEventData) {
        this.tap.emit(args);
    }

    onTouch(args: TouchGestureEventData) {
        console.log("isis - fab was touched");
        let btn = args.view;
        switch(args.action) {
            case 'down':
                btn.className = 'float-btn down';
                break;
            case 'up':
                btn.className = 'float-btn';
                break;
        }
    }

    onLoaded(args) {
        let tnsView = <any>args.object;
        if (tnsView.android) {
            let nativeView = tnsView.android;
            var shape = new android.graphics.drawable.GradientDrawable();
            shape.setShape(android.graphics.drawable.GradientDrawable.OVAL);
            shape.setColor(android.graphics.Color.parseColor('#30bcff'));
            nativeView.setBackgroundDrawable(shape);
            nativeView.setElevation(20);
        }
        else if (tnsView.ios) {
            let nativeView = tnsView.ios;
            nativeView.layer.shadowColor = this.shadowColor.ios.CGcolor;
            nativeView.layer.shadowOffset = CGSizeMake(0, this.shadowOffset);
            nativeView.layer.shadowOpacity = 0.5;
            nativeView.laye.shadowRadius = 5.0;
        }
    }
}