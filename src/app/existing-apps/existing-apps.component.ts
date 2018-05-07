import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-existing-apps',
  templateUrl: './existing-apps.component.html',
  styleUrls: ['./existing-apps.component.css']
})
export class ExistingAppsComponent implements OnInit {
  @Input() incompleteApps = '...';
  @Input() submittedApps = '...';
  @Input() successfullApprovals = '...';
  constructor(private routes: Router) { }
  appMain(){
    this.routes.navigate(['appmain']);
  }
  onlineApps(typeApp){
    this.routes.navigate(['applications',typeApp]);
  }
  ngOnInit() {
  }

  

}
