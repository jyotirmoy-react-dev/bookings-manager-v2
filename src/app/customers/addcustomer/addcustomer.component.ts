import { Component, OnInit } from '@angular/core';
import { HomepageserviceService } from '../../homepageservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {
  customerForm: FormGroup;
  hotelFormGroup: FormGroup;
  token = '';
  constructor(private homeS: HomepageserviceService) { }

  ngOnInit() {
    this.homeS.token.subscribe(token => {
      this.token = token;
      this.setupCustomerForm();
      this.hotelFormGroup = new FormGroup({
        HCode: new FormControl('',{
          validators: Validators.required
        })
      });
    })
  }

  setupCustomerForm(){
    this.customerForm = new FormGroup({
      firstname: new FormControl('',{
        validators: Validators.required
      }),
      lastname: new FormControl('',{
        validators: Validators.required
      }),
      emailFormControl: new FormControl('',{
        validators: Validators.email
      }),
      phone: new FormControl('',{
        validators: Validators.required
      }),
      address: new FormControl('',{
        validators: Validators.required
      }),
      address2: new FormControl(''),
      city: new FormControl('',{
        validators: Validators.required
      }),
      state: new FormControl('',{
        validators: Validators.required
      }),
      postcode: new FormControl('',{
        validators: Validators.required
      }),
      guests: new FormControl('',{
        validators: Validators.required
      })

    });
  }

  saveCustomer({valid, value}){

  }
}
