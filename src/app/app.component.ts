import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomepageserviceService } from './homepageservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  load=false;
  constructor(private routes: Router, private loader: HomepageserviceService) {
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
  ngOnInit(){
     this.loader.showLoader.subscribe(res => {
       this.load = res;
    })
  }
}
