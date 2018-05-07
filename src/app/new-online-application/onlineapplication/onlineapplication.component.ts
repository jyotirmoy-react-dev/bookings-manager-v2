import { Component, OnInit } from '@angular/core';
import { NewappserviceService } from '../newappservice.service';
import { Router } from '@angular/router';
import { OnlineappService } from './onlineapp.service';

@Component({
  selector: 'app-onlineapplication',
  template: `
  <mat-card>
  <mat-card-title>
    <app-page-stepper [page]="page"></app-page-stepper>
  </mat-card-title>
  <mat-card-content>
    <router-outlet></router-outlet> 
  </mat-card-content>
</mat-card>
  `,
  styles: []
})
export class OnlineapplicationComponent implements OnInit {
  page = "";
  unique_app_id = '';

  constructor(private newAppService: NewappserviceService, private routes: Router, private fetchAppService: OnlineappService) { }
  
  ngOnInit() {
    this.newAppService.currentPage.subscribe(res => {
      this.page = res;
      if(res==""){
        this.routes.navigate(['/']);
      }

    })

    this.newAppService.unique_app_id.subscribe(res => {
      this.unique_app_id = res;
    });
  }
  getAppDetails() {
    this.fetchAppService.getAppDetails(this.unique_app_id).subscribe(res => {
      this.fetchAppService.setAppDetails(res);
    });
  }
}
