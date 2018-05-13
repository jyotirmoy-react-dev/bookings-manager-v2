import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ManagehotelService } from './managehotel.service';
import { HomepageserviceService } from '../homepageservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-managehotel',
  templateUrl: './managehotel.component.html',
  styleUrls: ['./managehotel.component.css']
})
export class ManagehotelComponent implements OnInit {
  
  hotelDetails = {
    "id":'',
    "HName": '',
    "HContact": '',
    "HAddress": '',
    "HLocation": '',
    "HPhone": '',
    "HEmail": '',
    "HCheckin":'',
    "HCheckout":''
  };
  hotelForm: FormGroup;
  id = '';token='';
  constructor(private getdetails: ManagehotelService, private fetch: HomepageserviceService, private routes: ActivatedRoute,
            private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
this.setUpForm();
  this.fetch.token.subscribe(token => {
    this.token = token;
    this.routes.paramMap.subscribe(param =>{
      const id = param.get('id');
      this.id = id;
      this.getdetails.getHotelDetails(id,token).subscribe(res => {
        this.hotelDetails.HName = res.HName;
        this.hotelDetails.HContact = res.HContact;
        this.hotelDetails.HAddress = res.HAddress;
        this.hotelDetails.HLocation = res.HLocation;
        this.hotelDetails.HPhone = res.HPhone;
        this.hotelDetails.HEmail = res.HEmail;
        this.hotelDetails.HCheckin = res.HCheckin;
        this.hotelDetails.HCheckout = res.HCheckout;
        this.setUpForm();
      },
        ({ error }) => {
          if (error.error.code == 'AUTHORIZATION_REQUIRED') {
            this.fetch.unauthUserLogOut();
          }
        });
    });
  }); 
  }

  setUpForm() {
  this.hotelForm = new FormGroup({
        HName: new FormControl(this.hotelDetails.HName, {
          validators: Validators.required
        }),
        HContact: new FormControl(this.hotelDetails.HContact, {
          validators: Validators.required
        }),
        HLocation: new FormControl(this.hotelDetails.HLocation, {
          validators: Validators.required
        }),
        HAddress: new FormControl(this.hotelDetails.HAddress, {
          validators: Validators.required
        }),
        HPhone: new FormControl(this.hotelDetails.HPhone, {
          validators: Validators.required
        }),
        HEmail: new FormControl(this.hotelDetails.HEmail, {
          validators: Validators.required
        }),
      HCheckin: new FormControl(this.hotelDetails.HCheckin,{
        validators: Validators.required
      }),
      HCheckout: new FormControl(this.hotelDetails.HCheckout,{
        validators: Validators.required
      })
      });
  }
  saveHotel({value,valid}){
    if (valid) {
      const send_data = {
        HName: value.HName,
        HContact: value.HContact,
        HLocation: value.HLocation,
        HAddress: value.HAddress,
        HPhone: value.HPhone,
        HEmail: value.HEmail,
        HCheckin: value.HCheckin,
        HCheckout: value.HCheckout
      };
      this.getdetails.updateHotel(this.id,this.token,send_data).subscribe(res => {
        this.snackBar.open('Done !', '', {
          duration: 2000,
        });
        this.router.navigate(['hotels']);
      },
        ({ error }) => {
          if (error.error.code == 'AUTHORIZATION_REQUIRED') {
            this.fetch.unauthUserLogOut();
          }
        });
    }

  }

  deleteHotel(){
    this.getdetails.deleteHotel(this.id,this.token).subscribe(res => {
      this.snackBar.open('Delted!', '', {
        duration: 2000,
      });
      this.router.navigate(['hotels']);
    },
      ({ error }) => {
        if (error.error.code == 'AUTHORIZATION_REQUIRED') {
          this.fetch.unauthUserLogOut();
        }
      });
  }
}
