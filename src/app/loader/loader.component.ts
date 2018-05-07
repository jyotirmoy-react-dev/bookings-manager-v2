import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <mat-card>
      <mat-grid-list cols="3">
        <mat-grid-tile></mat-grid-tile>
        <mat-grid-tile>
          <mat-spinner></mat-spinner>
        </mat-grid-tile>
        <mat-grid-tile></mat-grid-tile>
      </mat-grid-list>
    </mat-card>
  `,
  styles: []
})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
