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
    const token = 'lcZHWO7l5YvaXSCDMOpnkZlvGuK3DlcN5Xps42yFLPBVLNqELkYDxRqxz0EFamZM';
    sessionStorage.clear();
    sessionStorage.setItem('token',token);
    this.fetchHome.setToken(token);
  }
 
}

