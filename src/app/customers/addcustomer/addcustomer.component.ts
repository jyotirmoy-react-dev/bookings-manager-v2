import {Component, OnInit} from '@angular/core';
import {HomepageserviceService} from '../../homepageservice.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ExistingenquiryserviceService } from '../../existingenquiries/existingenquiryservice.service';

@Component({selector: 'app-addcustomer', templateUrl: './addcustomer.component.html', styleUrls: ['./addcustomer.component.css']})
export class AddcustomerComponent implements OnInit {
  customerForm : FormGroup;
  hotelFormGroup : FormGroup;
  token = '';
  CHotel = '';
  hotels:any = [];
  constructor(private homeS : HomepageserviceService, private hotelService: ExistingenquiryserviceService) {}

  ngOnInit() {
    this
      .homeS
      .token
      .subscribe(token => {
        this.token = token;
        this.getHotels();
        this.setupCustomerForm();
        this.setUpHotelForm();
      })
  }

  setupCustomerForm() {
    this.customerForm = new FormGroup({
      CFirstname: new FormControl('', {validators: Validators.required}),
      CLastname: new FormControl('', {validators: Validators.required}),
      CEmail: new FormControl('', {validators: Validators.email}),
      CPhone: new FormControl('', {validators: Validators.required}),
      CAddress: new FormControl('', {validators: Validators.required}),
      CAddress2: new FormControl(''),
      CCity: new FormControl('', {validators: Validators.required}),
      CState: new FormControl('', {validators: Validators.required}),
      CPin: new FormControl('', {validators: Validators.required}),
      CNGuests: new FormControl('', {validators: Validators.required})

    });
  }

  setUpHotelForm(){
    this.hotelFormGroup = new FormGroup({
      Hotelcode: new FormControl('', { validators: Validators.required })
    });
  }

  saveCustomer({valid, value}) {}

  getHotels(){
    this.homeS.showHideLoader(true);
    this.hotelService.getHotels(this.token).subscribe(res => {
        this.hotels = res;
        this.homeS.showHideLoader(false);
    });
  }
}
