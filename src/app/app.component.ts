import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private routes: Router) {
  }
  handleNavigation(type){
    switch (type) {
      case 'home':
        this.routes.navigate(['/']);
        break;
      case 'newapp':
        this.routes.navigate(['submitnewapp']);
        break;
      case 'changepass':
        this.routes.navigate(['changepassword']);
        break;
      case 'logout':
        this.routes.navigate(['logout']);
        break;
      default:
        break;
    }
  }
}
