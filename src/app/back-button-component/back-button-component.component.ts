import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-button-component',
  template: `
    <button mat-icon-button color="primary" color="warn" (click)="goBack()">
    <mat-icon>arrow_back</mat-icon>
  </button>
  `,
  styles: []
})
export class BackButtonComponentComponent implements OnInit {

  constructor(public _location: Location) { }

  ngOnInit() {
  }
  goBack() {
    this._location.back();
  }
}
