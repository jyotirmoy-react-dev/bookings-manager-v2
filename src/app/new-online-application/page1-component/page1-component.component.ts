
import { Component, OnInit } from '@angular/core';
import { NewappserviceService } from '../newappservice.service';
import { Page1Service } from './page1.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { OnlineappService } from '../onlineapplication/onlineapp.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page1-component',
  templateUrl: './page1-component.component.html',
  styleUrls: ['./page1-component.component.css']
})
export class Page1ComponentComponent implements OnInit {
  unique_app_id = '';
  fittings = [];
  app_details = {
    section1: '',
    description: '',
    application_type: '',
    production_stage: ''
  };
  page1Form: FormGroup;
  wrasApprovalStatus = [
    { title: 'New WRAS approval', value: 'new' },
    { title: 'Renewal of existing WRAS approval', value: 'renewal' },
    { title: 'Addition of a new product to an existing WRAS approval', value: 'addition' },
    { title: ' Modification to an existing product within an WRAS approval', value: 'modification' },
  ];

  constructor(private fetch: NewappserviceService, private onlineApp: OnlineappService, private page1: Page1Service,
    private snackBar: MatSnackBar, private onlineService: OnlineappService,
     private routes: Router, private router: ActivatedRoute) { }

  ngOnInit() {
    this.fetch.unique_app_id.subscribe(res => {
      this.unique_app_id = res;
      this.getAppDetails();
      this.setUpPage1Form();
    });
    this.onlineService.AppDetails.subscribe(res => {
      console.log(res);
    });

  }
  setUpPage1Form() {

    this.page1Form = new FormGroup({
      fittingType: new FormControl(this.app_details.section1, {
        validators: Validators.required,
        updateOn: 'change'
      }),
      fittingsName: new FormControl(this.app_details.description, {
        validators: Validators.required,
        updateOn: 'change'
      }),
      approvalStatus: new FormControl(this.app_details.application_type, {
        updateOn: 'change'
      }),
      productionStatus: new FormControl(this.app_details.production_stage, {
        updateOn: 'change'
      })
    });
  }
  savePage1() {
    const data = new FormData();
    data.append('unique_app_id', this.unique_app_id);
    data.append('page', '1');
    data.append('section', this.page1Form.value.fittingType);
    data.append('description', this.page1Form.value.fittingsName);
    data.append('application_type', this.page1Form.value.approvalStatus);
    data.append('production_stage', this.page1Form.value.productionStatus);
    this.page1.savePage1(data).subscribe(res => {
      console.log(res);
      this.snackBar.open('Created !' + res.status, '', {
        duration: 2000
      });
      this.fetch.newStep('2');
      this.routes.navigate(['../page2'], {relativeTo: this.router});
    });
  }
  getAppDetails() {
    this.onlineApp.getAppDetails(this.unique_app_id).subscribe(res => {
      this.fittings = res.menu_details;
      this.app_details = res.app_details;
      this.onlineService.setAppDetails(this.app_details);
      this.setUpPage1Form();
    });
  }

}
