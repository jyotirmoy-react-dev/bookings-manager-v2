import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-button',
  template: `
    <div [formGroup]="group" class="row">
    <div class="col-6"></div>
    <div class="col-6"><button type="submit"  mat-raised-button color="warn" >{{config.label}}</button></div>
    </div>
  `,
  styles: []
})
export class FormButtonComponent implements OnInit {
  config;
  group:FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
