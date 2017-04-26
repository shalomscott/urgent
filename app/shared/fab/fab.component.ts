import { Component, Output, EventEmitter} from "@angular/core";

@Component({
  selector: "fab",
  template: `<StackLayout class="float-btn" (tap)="onTap($event)">
                <Label class="float-btn-text" text="+"></Label>
             </StackLayout>`,
  styles: [
      `
      .float-btn {
          background-color: #FF69B4;
          border-radius: 28;
          width: 56;
          height: 56;
          text-align: center;
          vertical-align: middle;  
      }
      .float-btn-text {
          color: #ffffff;
          font-size: 36;
          margin-top: -3;
          margin-right: -1;
      }  `
  ]
})
export class FabComponent {
    
    @Output() tap: EventEmitter<any> = new EventEmitter<any>();
    
    onTap(args) {
        this.tap.emit(args);
    }
}