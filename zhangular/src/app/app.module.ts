import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { TevekenysegFormComponent } from './tevekenyseg-form/tevekenyseg-form.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { TevekenysegAddFormComponent } from './tevekenyseg-add-form/tevekenyseg-add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    TevekenysegFormComponent,
    TevekenysegAddFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
