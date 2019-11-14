import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar.component';
import { LogoComponent } from './the-logo/the-logo.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ NavbarComponent, LogoComponent ],
  exports:    [ NavbarComponent, LogoComponent ]
})

export class NavbarModule { }