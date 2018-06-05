import {Component, OnInit} from '@angular/core';
import {HomepageserviceService} from '../../homepageservice.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ExistingenquiryserviceService } from '../../existingenquiries/existingenquiryservice.service';
import { AddcustomerService } from './addcustomer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({selector: 'app-addcustomer', templateUrl: './addcustomer.component.html', styleUrls: ['./addcustomer.component.css']})
export class AddcustomerComponent implements OnInit {
  customerForm : FormGroup;
  hotelFormGroup : FormGroup;
additionalInfoForm: FormGroup;
  token = '';
  CHotel = '';
  hotels:any = [];
  HCode:any = '';
  SaveType:any = 'save';
  customerInfo: any = {
    'CFirstname': '',
    'CLastname': '',
    'CAddress': '',
    'CAddress2': '',
    'CEmail': '',
    'CPhone': '',
    'CCity': '',
    'CState': '',
    'CPin': '',
    'CNGuests': '',
    'CHotel': '',
    'HCode': '',
    'CNotes': '',
    'id': 0
  }
  constructor(private homeS : HomepageserviceService, private hotelService: ExistingenquiryserviceService,
  private addcustomerS: AddcustomerService, private routes: Router, private router: ActivatedRoute) {}

  ngOnInit() {
    this
      .homeS
      .token
      .subscribe(token => {
        this.token = token;
        this.getHotels();
        this.setupCustomerForm();
        this.setUpHotelForm();
        this.addedNotesForm();
this.getCustomerInfo();
      })
  }

  setupCustomerForm() {
    this.customerForm = new FormGroup({
      CFirstname: new FormControl(this.customerInfo.CFirstname, {validators: Validators.required}),
      CLastname: new FormControl(this.customerInfo.CLastname, {validators: Validators.required}),
      CEmail: new FormControl(this.customerInfo.CEmail, {validators: Validators.email}),
      CPhone: new FormControl(this.customerInfo.CPhone, {validators: Validators.required}),
      CAddress: new FormControl(this.customerInfo.CAddress, {validators: Validators.required}),
      CAddress2: new FormControl(this.customerInfo.CAddress2),
      CCity: new FormControl(this.customerInfo.CCity, {validators: Validators.required}),
      CState: new FormControl(this.customerInfo.CState, {validators: Validators.required}),
      CPin: new FormControl(this.customerInfo.CPin, {validators: Validators.required}),
      CNGuests: new FormControl(this.customerInfo.CNGuests, {validators: Validators.required})

    });
  }

  setUpHotelForm(){
    this.hotelFormGroup = new FormGroup({
      CHotel: new FormControl(this.customerInfo.CHotel, { validators: Validators.required })
    });
  }

  addedNotesForm(){
    this.additionalInfoForm = new FormGroup({
      addedNotes: new FormControl(this.customerInfo.CNotes,{
        updateOn: 'change'
      })
    });
  }

  saveCustomer() {
    this.homeS.showHideLoader(true);
    console.log(this.hotelFormGroup.value);
    console.log(this.customerForm.value);
    const send_data = {
      'CFirstname': this.customerForm.value.CFirstname,
      'CLastname': this.customerForm.value.CLastname,
      'CAddress': this.customerForm.value.CAddress,
      'CAddress2': this.customerForm.value.CAddress2,
      'CEmail': this.customerForm.value.CEmail,
      'CPhone': this.customerForm.value.CPhone,
      'CCity': this.customerForm.value.CCity,
      'CState': this.customerForm.value.CState,
      'CPin': this.customerForm.value.CPin,
      'CNGuests': this.customerForm.value.CNGuests,
      'CHotel': this.hotelFormGroup.value.CHotel.HName,
      'CNotes': this.additionalInfoForm.value.addedNotes,
      'HCode': this.hotelFormGroup.value.CHotel.id
    };
  this.addcustomerS.saveCustomer(this.token,send_data).subscribe(res=>{
    this.homeS.showHideLoader(false);
    this.routes.navigate(['clients']);
  },
    ({ error }) => {
      if (error.error.code == 'AUTHORIZATION_REQUIRED') {
        this.homeS.unauthUserLogOut();
      }else{
        console.error(error);
      }
    });
  }

  getHotels(){
    this.homeS.showHideLoader(true);
    this.hotelService.getHotels(this.token).subscribe(res => {
        this.hotels = res;
        this.homeS.showHideLoader(false);
    },
      ({ error }) => {
        if (error.error.code == 'AUTHORIZATION_REQUIRED') {
          this.homeS.unauthUserLogOut();
        }
      });
  }
  
  getCustomerInfo(){
    this.homeS.showHideLoader(true);
    this.router.paramMap.subscribe(res => {
      const id = res.get('id');
      if (id) {
        this.SaveType = 'update';
        this.addcustomerS.getCustomerInfo(id, this.token).subscribe((res) => {
          this.customerInfo = res;
          this.setupCustomerForm();
          this.setUpHotelForm();
          this.addedNotesForm();
          this.homeS.showHideLoader(false);
        });
      }
      
    });
  }
  
}
