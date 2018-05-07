import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-app-setup',
  templateUrl: './new-app-setup.component.html',
  styleUrls: ['./new-app-setup.component.css']
})
export class NewAppSetupComponent implements OnInit {
  @Input() hotelCount = '...';
  constructor(private routes: Router) { }
  ngOnInit() {}
  handleNewApps(pageType) {
    this.routes.navigate([pageType]);
  }
}
