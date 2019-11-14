import { Component } from '@angular/core';

@Component({
  selector: 'the-navbar',
  templateUrl: './navbar.component.html',
  // styleUrls: [ './navbar.component.css' ]
})
export class NavbarComponent  { 
  public open: boolean = false;

  toggleOpen() {
    this.open = !this.open;  
  }
}