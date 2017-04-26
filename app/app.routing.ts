import { LoginComponent } from "./pages/login/login.component";
import { ListComponent } from "./pages/list/list.component";
import { MessageMakerComponent } from "./pages/message-maker/message-maker.component";

export const routes = [
  { path: "", component: LoginComponent },
  { path: "list", component: ListComponent },
  { path: "message-maker", component: MessageMakerComponent }
];

export const navigatableComponents = [
  LoginComponent,
  ListComponent,
  MessageMakerComponent
];