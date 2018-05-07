import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { FetchfileserviceService } from '../fetchfileservice.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-online-applications',
  templateUrl: './online-applications.component.html',
  styleUrls: ['./online-applications.component.css']
})
export class OnlineApplicationsComponent implements OnInit {
  title = ''; typeApp = '';
  displayedColumns = ['Sample Number', 'Status', 'Product Description', 'Company', 'Next Step', 'Due Date', 'Over Due', 'View Status', 'Comments'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private routes: Router, private router: ActivatedRoute,
    private fetchFiles: FetchfileserviceService
     ) { }
  
  ngOnInit() {
    this.router.paramMap.subscribe((res: ParamMap)=>{
       this.typeApp = res.get('type');
      switch (this.typeApp) {
        case 'all':
          this.title = "Showing All Apps";
          this.getFiles();
          break;
        case 'success':
          this.title = "Showing Successfully Submitted Apps";
          this.getApprovedFiles();  
          break;
      }
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  getFiles(){
    this.fetchFiles.getMyfiles('agreen@nsf.org').subscribe(res => {
      this.dataSource.data = res;
    });
  }
  getApprovedFiles(){
    this.fetchFiles.getMyApprovedFiles('agreen@nsf.org').subscribe(res =>{
      this.dataSource.data = res;
    });
  }
}
