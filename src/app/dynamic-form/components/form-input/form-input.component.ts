import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  template: `
    <div [formGroup]="group" class="form-group">
    <label>{{config.label}}</label>
      <input type="text" [placeholder]="config.placeholder" [formControlName]="config.name" />
    </div>
  `,
  styles: []
})
export class FormInputComponent implements OnInit {
  config;
  group: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
