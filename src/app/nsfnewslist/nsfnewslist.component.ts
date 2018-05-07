import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nsfnewslist',
  templateUrl: './nsfnewslist.component.html',
  styleUrls: ['./nsfnewslist.component.css']
})
export class NsfnewslistComponent implements OnInit {
  newsType: string;
  constructor(private routes: Router) { }
  newsMarkingClarification(){
    this.newsType = 'nsfclarification';
    this.routes.navigate(['pamsnewsdetails', this.newsType]);
  }
  newsLeadTime(){
    this.newsType = 'leadtimes';
    this.routes.navigate(['pamsnewsdetails', this.newsType]);
  }
  newsModification(){
    this.newsType = 'modificationaddition';
    this.routes.navigate(['pamsnewsdetails', this.newsType]);
  }
  onlineappLive(){
    this.newsType = 'onlineapplive';
    this.routes.navigate(['pamsnewsdetails', this.newsType]);
  }
  ngOnInit() {
  }

}
