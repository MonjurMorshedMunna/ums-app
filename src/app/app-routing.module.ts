import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./authentication/login/login.component";
import {RegistrationComponent} from "./authentication/registration/registration.component";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";


const routes:Routes=[
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'register', component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{

}
