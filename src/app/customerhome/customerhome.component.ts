import { Component, OnInit } from '@angular/core';
import { HomepageserviceService } from '../homepageservice.service';
@Component({
  selector: 'app-customerhome',
  templateUrl: './customerhome.component.html',
  styleUrls: ['./customerhome.component.css']
})
export class CustomerhomeComponent implements OnInit {
  appsCount: any = '';
  constructor(private fetchHome: HomepageserviceService) {}
  ngOnInit() {
    this.userLogin();    
  }

  userLogin() {
    this.fetchHome.showHideLoader(true);
    const send_data = {
      "email": "jyotirmoy85@gmail.com",
      "password": "password123"
    };
    this.fetchHome.setUserLogin(send_data).subscribe(res => {
      const token = res.id;
      sessionStorage.clear();
      sessionStorage.setItem('token', token);
      this.fetchHome.setToken(token);
      this.fetchHome.showHideLoader(false);
    });
  }
 
}

