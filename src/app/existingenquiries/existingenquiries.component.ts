import { Component, OnInit, ViewChild,  } from '@angular/core';
import { ExistingenquiryserviceService } from './existingenquiryservice.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { HomepageserviceService } from '../homepageservice.service';
@Component({
  selector: 'app-existingenquiries',
  templateUrl: './existingenquiries.component.html',
  styleUrls: ['./existingenquiries.component.css']
})

export class ExistingenquiriesComponent implements OnInit {
  displayedColumns = ['Id', 'Hotel Name', 'Hotel Contact', 'Hotel Address', 'Hotel Phone', 'Hotel Email'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fetchData: ExistingenquiryserviceService, private router: Router,
  private fetchhome: HomepageserviceService) { }

  ngOnInit() {
    this.getHotels();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  startNew(){
    this.router.navigate(['addhotel']);
  }
  getHotels(){
    this.fetchhome.showHideLoader(true);
    this.fetchhome.token.subscribe(token=>{
      this.fetchData.getHotels(token).subscribe(res => {
        this.dataSource.data = res;
        this.fetchhome.showHideLoader(false);
      },
        error => {
          console.log(error);
        });
    });
  }

}
