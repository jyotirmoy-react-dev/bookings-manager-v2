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
  isLoggedIn= false;
  token = '';
  constructor(private routes: Router, private loader: HomepageserviceService) {
  }
  userLogout(){
    this.loader.showHideLoader(true);
      this.loader.logoutUser().subscribe(response2 => {
        window.sessionStorage.removeItem('token');
        window.sessionStorage.clear();
        this.loader.setUserLogFlag(false);
        this.routes.navigate(['login']);
        this.loader.showHideLoader(false);
      });
  }
  ngOnInit(){
     this.loader.showLoader.subscribe(res => {
       this.load = res;
       this.checkLogin();
    })
    this.loader.token.subscribe(res=>{
      this.token = res;
    });
  }

  checkLogin(){
    this.loader.isLoggedin.subscribe(res => {
      if (res == true) {
        this.isLoggedIn = true;
      }
      else{
        this.isLoggedIn = false;
      }
    })
  }
}
