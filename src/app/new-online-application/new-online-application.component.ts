import { Component, OnInit } from '@angular/core';
import { NewappserviceService } from './newappservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-online-application',
  templateUrl: './new-online-application.component.html',
  styleUrls: ['./new-online-application.component.css']
})
export class NewOnlineApplicationComponent implements OnInit {
  newappForm: FormGroup;
  startnewAppForm: FormGroup;
  unique_app_id = '';
  hasData = false;
  loadingData = false;
  previousDetails = {
    old_id: '',
    section: '',
    description: '',
    company: '',
    contact: '',
    applicant_address: '',
    contact_address: '',
    contact_telephone: '',
    fax: '',
    contact_mobile: '',
    website: '',
    contact_email: '',
    extra_contact_email: '',
    company_email: '',
    contact_fax: '',
    manufacturer: '',
    manufacturer_address: '',
    manufacturer2: '',
    manufacturer_address2: '',
    manufacturer3: '',
    manufacturer_address3: '',
    manufacturer4: '',
    manufacturer_address4: '',
    manufacturer5: '',
    manufacturer_address5: '',
    manufacturer6: '',
    manufacturer_address6: '',
    approval_temp: '',
    mim_pressure: '',
    max_pressure: '',
    pressure_description: '',
    marking_description: '',
    basic_temp: '',
    general_description: '',
    sub_category: ''
  };
  Samples = [
    { viewValue: '180038 -  ...', value: '180038' }
  ];
  checkBoxConfig = [];
  constructor(private fetch: NewappserviceService, private routes: Router) { }

  ngOnInit() {
    this.getSamples();
    this.newappForm = new FormGroup({
      sample_number: new FormControl('', {
        validators: Validators.required,
        updateOn: 'change'
      })
    });
  }s
  getAppId() {
    this.fetch.getUniqueAppId().subscribe(res => {
      this.fetch.newUniqueId(res.unique_app_id);
      this.fetch.unique_app_id.subscribe(response => {
        this.unique_app_id = response;
        this.loadingData = false;
      });
    });
  }
  getAppDetails() {
    this.loadingData = true;
    this.fetch.getPreviousAppDetails(this.newappForm.value.sample_number).subscribe(res => {
      console.log(res);
      this.previousDetails = res;
      this.loadingData = false;
      this.hasData = true;
      this.setUpPreviousAppForm();
    });
  }
  setUpPreviousAppForm() {
    this.checkBoxConfig = [
      {
        type: 'checkbox', name: 'incl_section', value: 'false', title: 'Product Type',
        description: 'Product Type: ' + this.previousDetails.general_description + '-' + this.previousDetails.sub_category
      },
      {
        type: 'checkbox', name: 'incl_description', value: 'false', title: 'Range Description',
        description: 'Range Description: ' + this.previousDetails.description
      },
      {
        type: 'checkbox', name: 'incl_company', value: 'true', title: 'Company',
        description: 'Company: ' + this.previousDetails.company + this.previousDetails.applicant_address
      },
      {
        type: 'checkbox', name: 'incl_contact', value: 'true', title: 'Contact',
        description: 'Contact: ' + this.previousDetails.contact + this.previousDetails.contact_address
      },
      {
        type: 'checkbox', name: 'incl_additional_contact', value: 'true', title: 'Additional Contact Email',
        description: 'Additional Contact Email: ' + this.previousDetails.extra_contact_email
      },
      {
        type: 'checkbox', name: 'incl_man1', value: 'true', title: 'Manufacturing Location',
        description: 'Manufacturing Location: ' + this.previousDetails.manufacturer + this.previousDetails.manufacturer_address
      },
      {
        type: 'checkbox', name: 'incl_man2', value: 'true', title: 'Manufacturing Location',
        description: 'Manufacturing Location: ' + this.previousDetails.manufacturer2 + this.previousDetails.manufacturer_address2
      },
      {
        type: 'checkbox', name: 'incl_man3', value: 'true', title: 'Manufacturing Location',
        description: 'Manufacturing Location: ' + this.previousDetails.manufacturer3 + this.previousDetails.manufacturer_address3
      },
      {
        type: 'checkbox', name: 'incl_man4', value: 'true', title: 'Manufacturing Location',
        description: 'Manufacturing Location: ' + this.previousDetails.manufacturer4 + this.previousDetails.manufacturer_address4
      },
      {
        type: 'checkbox', name: 'incl_man5', value: 'true', title: 'Manufacturing Location',
        description: 'Manufacturing Location: ' + this.previousDetails.manufacturer5 + this.previousDetails.manufacturer_address5
      },
      {
        type: 'checkbox', name: 'incl_man6', value: 'true', title: 'Manufacturing Location',
        description: 'Manufacturing Location: ' + this.previousDetails.manufacturer6 + this.previousDetails.manufacturer_address6
      },
      {
        type: 'checkbox', name: 'incl_min_pressure', value: 'true', title: 'Minimum Operating Pressure',
        description: 'Minimum Operating Pressure: ' + this.previousDetails.mim_pressure
      },
      {
        type: 'checkbox', name: 'incl_max_pressure', value: 'true', title: 'Maximum Operating Pressure',
        description: 'Maximum Operating Pressure: ' + this.previousDetails.max_pressure
      },
      {
        type: 'checkbox', name: 'incl_max_temp', value: 'true', title: 'Maximum Operating Temperature',
        description: 'Maximum Operating Temperature: ' + (this.previousDetails.basic_temp == 'hot' ? this.previousDetails.approval_temp : 'Cold wateruse only')
      },
      {
        type: 'checkbox', name: 'incl_press_desc', value: 'true', title: 'Pressure Description',
        description: 'Pressure Description: ' + this.previousDetails.pressure_description
      },
      {
        type: 'checkbox', name: 'incl_mark_desc', value: 'true', title: 'Product Marking Description',
        description: 'Product Marking Description: ' + this.previousDetails.marking_description
      },
      {
        type: 'button', name: 'startnewapp', label: 'Start New Application'
      }
    ];
  }
  getSamples() {
    this.loadingData = true;
    this.fetch.getSampleNumbers().subscribe(res => {
      this.Samples = res;
      this.getAppId();
    });
  }

  startNewAppPage1() {
    this.fetch.newStep('1');
    this.routes.navigate(['onlineapplication/page1']);
  }

  FormSubmit(value) {
    let data = new FormData();
    data.append('incl_section',value.incl_section ?value.incl_section : null);
    data.append('incl_description',value.incl_description ?value.incl_description : null);
    data.append('incl_company',value.incl_company ?value.incl_company : null);
    data.append('incl_contact',value.incl_contact ?value.incl_contact : null);
    data.append('incl_additional_contact',
     value.incl_additional_contact ?value.incl_additional_contact : null);
    data.append('incl_man1',value.incl_man1 ?value.incl_man1 : null);
    data.append('incl_man2',value.incl_man2 ?value.incl_man2 : null);
    data.append('incl_man3',value.incl_man3 ?value.incl_man3 : null);
    data.append('incl_man4',value.incl_man4 ?value.incl_man4 : null);
    data.append('incl_man5',value.incl_man5 ?value.incl_man5 : null);
    data.append('incl_man6',value.incl_man6 ?value.incl_man6 : null);
    data.append('incl_min_pressure',value.incl_min_pressure ?value.incl_min_pressure : null);
    data.append('incl_max_pressure',value.incl_max_pressure ?value.incl_max_pressure : null);
    data.append('incl_max_temp',value.incl_max_temp ?value.incl_max_temp : null);
    data.append('incl_press_desc',value.incl_press_desc ?value.incl_press_desc : null);
    data.append('incl_mark_desc',value.incl_mark_desc ?value.incl_mark_desc : null);
    data.append('unique_app_id', this.unique_app_id);
    data.append('included', 'yes');
    data.append('previous_app', this.newappForm.value.sample_number);
    this.fetch.SetNewApplicationForm(data).subscribe(res => {
      console.log(res);
    },
      error => {
        console.log(error);
      });
  }
}
