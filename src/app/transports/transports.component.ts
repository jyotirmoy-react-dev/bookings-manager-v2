import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { HomepageserviceService } from '../homepageservice.service';
import { TransportationService } from '../managehotel/transportation/transportation.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-transports',
  templateUrl: './transports.component.html',
  styleUrls: ['./transports.component.css']
})
export class TransportsComponent implements OnInit {
  transportForm: FormGroup;
  displayedColumns = ['Transport Name', 'Delete'];
  datasource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fetchTransport: TransportationService, private home: HomepageserviceService) { }

  ngOnInit() {
    this.getTransports();
    this.setupForm();
  }
  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
  }

  setupForm(){
    this.transportForm = new FormGroup({
      TName: new FormControl('',{
        validators: Validators.required
      })
    });
  }

  getTransports() {
    this.home.showHideLoader(true);
    this.home.token.subscribe(token => {
      this.fetchTransport.getTransportation(token).subscribe(res => {
        this.datasource.data = res;
        this.home.showHideLoader(false);
      },
        err => {
          console.error(err);
        });
    })
  }

  deleteTransport(id){
    this.home.showHideLoader(true);
    this.home.token.subscribe(token => {
      this.fetchTransport.deleteTransport(id,token).subscribe(res => {
        this.getTransports();
        this.home.showHideLoader(false);
      },
        err => {
          console.error(err);
        });
    })
  }

  addTransport({value,valid}){
    if ( valid ) {
      const send_data = {
      'TName':value.TName
    };
    this.home.showHideLoader(true);
    this.home.token.subscribe(token => {
      this.fetchTransport.addTransport(send_data, token).subscribe(res => {
        this.getTransports();
        this.home.showHideLoader(false);
        this.setupForm();
      },
        err => {
          console.error(err);
        });
    })
    }
  }
}
