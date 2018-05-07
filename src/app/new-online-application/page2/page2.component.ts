import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NewappserviceService } from '../newappservice.service';
import { Page2Service } from './page2.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html'
})
export class Page2Component implements OnInit {
  unique_app_id = '';
  userinfo = {
    email: 'agreen@nsf.org'
  };
  page2Form: FormGroup;
  constructor(private fetch: NewappserviceService, private page2: Page2Service) { }

  ngOnInit() {
    this.fetch.unique_app_id.subscribe(res => {
      this.unique_app_id = res;
      this.setUpPage2Form();
    });
  }

  setUpPage2Form() {
    this.page2Form = new FormGroup({
      company: new FormControl('', {
        validators: Validators.required,
        updateOn: 'change'
      }),
      company_telephone: new FormControl('', {
        validators: Validators.required,
        updateOn: 'change'
      }),
      fax: new FormControl('', {
        validators: Validators.required,
        updateOn: 'change'
      }),
      contact_mobile: new FormControl('', {
        updateOn: 'change'
      }),
      website: new FormControl('', {
        updateOn: 'change'
      }),
      company_email: new FormControl('', {
        updateOn: 'change'
      }),
      contact_fax: new FormControl('', {
        updateOn: 'change'
      }),
      extra_contact_email: new FormControl('', {
        updateOn: 'change'
      }),
      contact: new FormControl('', {
        updateOn: 'change'
      }),
      applicant_address: new FormControl('', {
        updateOn: 'change'
      }),
      contact_address: new FormControl('', {
        updateOn: 'change'
      }),
      contact_telephone: new FormControl('', {
        updateOn: 'change'
      }),
      manufacturer: new FormControl('', {
        updateOn: 'change'
      }),
      manufacturer_address: new FormControl('', {
        updateOn: 'change'
      }),
      manufacturer2: new FormControl('', {
        updateOn: 'change'
      }),
      manufacturer_address2: new FormControl('', {
        updateOn: 'change'
      }),
      manufacturer3: new FormControl('', {
        updateOn: 'change'
      }),
      manufacturer_address3: new FormControl('', {
        updateOn: 'change'
      }),
      manufacturer4: new FormControl('', {
        updateOn: 'change'
      }),
      manufacturer_address4: new FormControl('', {
        updateOn: 'change'
      }),
      manufacturer5: new FormControl('', {
        updateOn: 'change'
      }),
      manufacturer_address5: new FormControl('', {
        updateOn: 'change'
      }),
      manufacturer6: new FormControl('', {
        updateOn: 'change'
      }),
      manufacturer_address6: new FormControl('', {
        updateOn: 'change'
      })
    });
  }

  submitPage2({ value, valid }) {
    console.log(value);
    const data = new FormData();
    data.append('page', '2');
    data.append('unique_app_id', this.unique_app_id);
    data.append('company', value.company);
    data.append('company_telephone', value.company_telephone);
    data.append('fax', value.fax);
    data.append('contact_mobile', value.contact_mobile);
    data.append('website', value.website);
    data.append('company_email', value.company_email);
    data.append('contact_fax', value.contact_fax);
    data.append('extra_contact_email', value.extra_contact_email);
    data.append('contact', value.contact);
    data.append('applicant_address', value.applicant_address);
    data.append('contact_address', value.contact_address);
    data.append('contact_telephone', value.contact_telephone);
    data.append('manufacturer', value.manufacturer);
    data.append('manufacturer_address', value.manufacturer_address);
    data.append('manufacturer2', value.manufacturer2);
    data.append('manufacturer_address2', value.manufacturer_address2);
    data.append('manufacturer3', value.manufacturer3);
    data.append('manufacturer_address3', value.manufacturer_address3);
    data.append('manufacturer4', value.manufacturer4);
    data.append('manufacturer_address4', value.manufacturer_address4);
    data.append('manufacturer5', value.manufacturer5);
    data.append('manufacturer_address5', value.manufacturer_address5);
    data.append('manufacturer6', value.manufacturer6);
    data.append('manufacturer_address6', value.manufacturer_address6);
    this.page2.savePage2(data).subscribe(res => {
      console.log(res);
    })
  }

}
