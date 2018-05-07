import { Component, OnInit, ViewChild,  } from '@angular/core';
import { ExistingenquiryserviceService } from './existingenquiryservice.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-existingenquiries',
  templateUrl: './existingenquiries.component.html',
  styleUrls: ['./existingenquiries.component.css']
})

export class ExistingenquiriesComponent implements OnInit {
  ELEMENT_DATA:Array<any> = [];
  displayedColumns = ['ENo Info', 'AM', 'Company', 'Docs', 'Customer Info', 'Dates', 'Edit'];
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
    this.fetchData.getDataForNewApps().subscribe(res=>{
      this.dataSource.data = res;
    },
  error=>{
    console.log(error);
  });
  }

}
