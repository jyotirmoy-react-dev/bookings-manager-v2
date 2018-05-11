import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RoomtypesService } from './roomtypes.service';
import { HomepageserviceService } from '../../homepageservice.service';

@Component({
  selector: 'app-hotelroomtypes',
  templateUrl: './Hotelroomtypes.component.html',
  styles: []
})
export class HotelRoomtypesComponent implements OnInit {
  @Input() hid = '';
  roomForm: FormGroup;
  roomtypes: any = [];
  token = '';
  Hroomtypes: any = [];
  constructor(private fetch: RoomtypesService,
              private home: HomepageserviceService
  ) { }

  ngOnInit() {
    this.setupForm();
    this.home.token.subscribe(token => {
      this.token = token;
      this.getRoomtypes(this.token);
      this.getHotelRoom();
    });
  }

  setupForm() {
    this.roomForm = new FormGroup({
      selroomtype: new FormControl('', {
        validators: Validators.required
      }),
      price: new FormControl('', {
        validators: Validators.required
      })
    });
  }
  getRoomtypes(token) {
    this.fetch.getRoomtypes(token).subscribe(res => {
      this.roomtypes = res;
    },
        ({ error }) => {
          if (error.error.code == 'AUTHORIZATION_REQUIRED') {
            this.home.logoutUser();
          }
        });
  }

  getHotelRoom() {
    this.home.showHideLoader(true);
    this.fetch.getHotelRoomtypes(this.token, this.hid).subscribe(res => {
      this.Hroomtypes = res;
      this.home.showHideLoader(false);
    },
        ({ error }) => {
          if (error.error.code == 'AUTHORIZATION_REQUIRED') {
            this.home.logoutUser();
          }
        });
  }
  saveRoomtypeToHotel({ valid, value }) {
    this.home.showHideLoader(true);
    const send_data = {
      "HCode": this.hid,
      "RCode": value.selroomtype,
      "Price": value.price,
      "hotelMasterId": this.hid
    };
    this.fetch.saveHotelRoomtype(this.token, send_data).subscribe(res => {
      this.getHotelRoom();
    },
        ({ error }) => {
          if (error.error.code == 'AUTHORIZATION_REQUIRED') {
            this.home.logoutUser();
          }
        });
  }

  deleteRoom(send_data) {
    this.home.showHideLoader(true);
    this.fetch.delteHotelRoom(send_data, this.token).subscribe(res => {
      this.getHotelRoom();
    },
        ({ error }) => {
          if (error.error.code == 'AUTHORIZATION_REQUIRED') {
            this.home.logoutUser();
          }
        });
  }

}
