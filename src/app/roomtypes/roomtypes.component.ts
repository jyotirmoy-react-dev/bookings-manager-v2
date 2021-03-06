import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { HomepageserviceService } from '../homepageservice.service';
import { TransportationService } from '../managehotel/transportation/transportation.service';
import { RoomtypesService } from '../managehotel/roomtypes/roomtypes.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-roomtypes',
  templateUrl: './roomtypes.component.html',
  styleUrls: ['./roomtypes.component.css']
})
export class RoomtypesComponent implements OnInit {
  roomtypeForm: FormGroup;
  displayedColumns = ['Roomtype Name', 'Delete'];
  datasource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fetchRooms: RoomtypesService,
    private home: HomepageserviceService) { }

  ngOnInit() {
      this.getRooms();
    this.setupForm();
  }
  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
  }

  setupForm(){
    this.roomtypeForm = new FormGroup({
      RName: new FormControl('',{
        validators: Validators.required
      })
    });
  }
  getRooms() {
    this.home.showHideLoader(true);
    this.home.token.subscribe(token => {
      this.fetchRooms.getRoomtypes(token).subscribe(res => {
        this.datasource.data = res;
        this.home.showHideLoader(false);
      },
        ({ error }) => {
          if (error.error.code == 'AUTHORIZATION_REQUIRED') {
            this.home.unauthUserLogOut();
          }
        });
    })
  }

  deleteRoom(id){
    this.home.showHideLoader(true);
    this.home.token.subscribe(token => {
      this.fetchRooms.deleteRoom(token,id).subscribe(res => {
        this.getRooms();
        this.home.showHideLoader(false);
      },
        ({ error }) => {
          if (error.error.code == 'AUTHORIZATION_REQUIRED') {
            this.home.unauthUserLogOut();
          }
        });
    })
  }

  addRoomtype({value,valid}){
    if(valid){
      const send_data = {'RName':value.RName};
      this.home.showHideLoader(true);
      this.home.token.subscribe(token => {
        this.fetchRooms.addRoom(token, send_data).subscribe(res => {
          this.getRooms();
          this.home.showHideLoader(false);
          this.setupForm();
        },
        ({ error }) => {
          if (error.error.code == 'AUTHORIZATION_REQUIRED') {
            this.home.unauthUserLogOut();
          }
        });
      })
    }
  }
}
