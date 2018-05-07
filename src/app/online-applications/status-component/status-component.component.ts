import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status-component',
  template: `
    <div>
      <p [innerHTML]="display"></p>
      <mat-icon *ngIf="filestatus=='File Not Checked'" color="warning">warning</mat-icon>
      <mat-icon *ngIf="filestatus=='Submitted to Pag'">card giftcard</mat-icon>
      <mat-icon *ngIf="hasissues=='false'">done</mat-icon>
      <mat-icon *ngIf="hasissues=='true'">clear</mat-icon>
    </div>
  `,
  styles: []
})
export class StatusComponentComponent implements OnInit {
  @Input() display = '';
  @Input() filestatus = '';
  @Input() hasissues = '';
  fileStatusIcon: any;
  constructor() { }

  ngOnInit() {
    
  }

}
