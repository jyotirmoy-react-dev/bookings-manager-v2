import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-checkbox',
  template: `
    <div>
    <div [formGroup]="group" class="row" >
        <div class="col-12">
        <mat-checkbox class="example-margin" color="primary" [formControlName]="config.name"></mat-checkbox>
    </div>
    </div>
  `,
  styleUrls: ['./form-checkbox.component.css']
})
export class FormCheckboxComponent implements OnInit {
  config;
  group:FormGroup;
  constructor() {
    console.log(this.config);
   }

  ngOnInit() {
  }

}
