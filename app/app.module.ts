import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";
import { FabComponent } from "./shared/fab/fab.component"

@NgModule({
  imports: [NativeScriptModule,
            NativeScriptFormsModule,
            NativeScriptHttpModule,
            NativeScriptRouterModule,
            NativeScriptRouterModule.forRoot(routes)],
  declarations: [AppComponent,
                FabComponent,
                 ...navigatableComponents],
  bootstrap: [AppComponent]
})
export class AppModule {}
