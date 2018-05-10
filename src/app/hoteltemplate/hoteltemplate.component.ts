import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HomepageserviceService } from '../homepageservice.service';
import { CategoriesService } from '../managehotel/categories/categories.service';
import { RoomtypesService } from '../managehotel/roomtypes/roomtypes.service';
import { TransportationService } from '../managehotel/transportation/transportation.service';
import { ManagehotelService } from '../managehotel/managehotel.service';

@Component({
  selector: 'app-hoteltemplate',
  templateUrl: './hoteltemplate.component.html',
  styleUrls: ['./hoteltemplate.component.css']
})
export class HoteltemplateComponent implements OnInit {
  id:= '' ;
  token = '';
  dataFetch = false;
  hotelDetails = {
    "id": '',
    "HName": '',
    "HContact": '',
    "HAddress": '',
    "HLocation": '',
    "HPhone": '',
    "HEmail": '',
    "HCheckin": '',
    "HCheckout": ''
  };
  Roomtypes: any = [];
  transportations: any = [];
  constructor(private router: Router,
              private routes: ActivatedRoute,
              private homes: HomepageserviceService,
              private categoryS: CategoriesService,
              private roomtypeS: RoomtypesService,
              private transportS: TransportationService,
              private hotelS: ManagehotelService
  ) { }

  ngOnInit() {
    this.routes.paramMap.subscribe(res => {
      this.id = res.get('id');
      this.homes.token.subscribe(token => {
        this.token = token;
        this.getHotelDetails();
        this.getRoomDetails();
        this.getTransportDetails();
      })
    });
  }
  getHotelDetails(){
    this.dataFetch = true;
    this.hotelS.getHotelDetails(this.id,this.token).subscribe(res => {
      this.hotelDetails = res;
      
    })
  }
  getRoomDetails(){
    
    this.roomtypeS.getHotelRoomtypes(this.token,this.id).subscribe(res => {
      this.Roomtypes = res;
      
    });
  }
  getTransportDetails(){
    
    this.transportS.getHoteTransport(this.token,this.id).subscribe(res => {
      this.transportations = res;
      this.dataFetch = false;
    });
  }
  // getHotelCategories
  // getHotelRoomtypes(token, id)
  // getHoteTransport(token, id)
  // getHotelDetails(id,token)
}
