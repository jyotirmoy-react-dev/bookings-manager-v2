import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { ManagecustomersService } from './managecustomers.service';
import { HomepageserviceService } from '../../homepageservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-managecustomers',
  templateUrl: './managecustomers.component.html',
  styleUrls: ['./managecustomers.component.css']
})
export class ManagecustomersComponent implements OnInit {
  displayedColumns = ['First Name',
                      'Last Name',
                      'Customer Address',
                      'Customer Email',
                      'Customer Phone',
                      'Guests'];
  dataSource = new MatTableDataSource();
  token = '';
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private customerService: ManagecustomersService, 
  private homeService: HomepageserviceService,
private router: Router) { }

  ngOnInit() {
    this.homeService.token.subscribe(res => {
      this.token = res;
      this.getCustomers();
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }
  getCustomers(){
    this.homeService.showHideLoader(true);
    this.customerService.getCustomerDetails(this.token).subscribe(res => {
      this.dataSource.data = res;
      this.homeService.showHideLoader(false);
    },
      ({ error }) => {
        if (error.error.code == 'AUTHORIZATION_REQUIRED') {
          this.homeService.unauthUserLogOut();
        }
      });
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  AddCustomer(){
    this.router.navigate(['newcustomer']);
  }
}
