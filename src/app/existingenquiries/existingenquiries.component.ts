import { Component, OnInit, ViewChild,  } from '@angular/core';
import { ExistingenquiryserviceService } from './existingenquiryservice.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-existingenquiries',
  templateUrl: './existingenquiries.component.html',
  styleUrls: ['./existingenquiries.component.css']
})

export class ExistingenquiriesComponent implements OnInit {
  displayedColumns = ['Id', 'Hotel Name', 'Hotel Contact', 'Hotel Address', 'Hotel Phone', 'Hotel Email'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fetchData: ExistingenquiryserviceService) { }

  ngOnInit() {
    this.getExistingEnquiries();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  getExistingEnquiries(){
    this.fetchData.getHotels().subscribe(res=>{
      this.dataSource.data = res;
    },
  error=>{
    console.log(error);
  });
  }

}
