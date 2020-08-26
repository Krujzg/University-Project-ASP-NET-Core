import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginFormComponent} from "./login-form/login-form.component";
import {TevekenysegFormComponent} from "./tevekenyseg-form/tevekenyseg-form.component";
import {TevekenysegAddFormComponent} from "./tevekenyseg-add-form/tevekenyseg-add-form.component";


const routes: Routes = [
  {path : 'login', component: LoginFormComponent},
  {path : 'tevekenyseg', component: TevekenysegFormComponent},
  {path :  'add', component: TevekenysegAddFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
