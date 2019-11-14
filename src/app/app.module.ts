import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NavbarModule } from './navbar-component/navbar.module';

import { AppComponent } from './app-component/app.component';
// import { NavbarComponent } from './navbar-component/navbar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NavbarModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }