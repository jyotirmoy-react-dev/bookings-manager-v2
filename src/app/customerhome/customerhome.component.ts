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
  getAppsCount() {
    this.fetchHome.fetchHotelCount().subscribe(res => {
      this.appsCount = res;
    },
      error => {
        console.error(error);
      });
  }
  ngOnInit() {
    this.getAppsCount();
  }
 
}

