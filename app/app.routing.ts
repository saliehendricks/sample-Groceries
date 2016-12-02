import { MainComponent } from "./pages/main/main.component";
import { LoginComponent } from "./pages/login/login.component";
import { ListComponent } from "./pages/list/list.component";


export const routes = [
  { path: "", component: LoginComponent },
  { path: "main", component: MainComponent },
  { path: "list", component: ListComponent }
];

export const navigatableComponents = [
  MainComponent,
  LoginComponent,
  ListComponent
];
