import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig } from '@angular/material';
import { FetchfileserviceService } from '../../fetchfileservice.service';

//ViewnotesComponentComponent

@Component({
  selector: 'app-view-notes',
  template: `
  <button mat-raised-button	 color="primary" (click)="openDialog()">Check Dates</button>
  `
})
export class ViewnotesComponentComponent {
  @Input() sample = '';
  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogconf = new MatDialogConfig();
    
    this.dialog.open(ViewnotesDialogComponent, {
      height: '400px',
      width: '600px',      
      data: {
        sample: this.sample
      }
    });
  }
}


@Component({
  selector: 'app-viewnotes-component',
  template: `
    <h2 mat-dialog-title>Details:</h2>
    <mat-dialog-content>
    <span *ngIf="loadDetails==false; else loadduedates">
    Materials Checked: {{temp.MATERIALS_CHECKED}}
    <br/>Samples Recieved: {{temp.SAMPLES_RECEIVED}}
    <br/>Pag Sent: {{temp.PAG_SENT}}
    <br/>Testing Complete: {{temp.TESTING_COMPLETE}}
    <br/>Testing Started: {{temp.TESTING_STARTED}}
    <br/>Wras Sent: {{temp.WRAS_SENT}}
    </span>
    <ng-template #loadduedates >
      <mat-spinner></mat-spinner>
    </ng-template>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `
})
export class ViewnotesDialogComponent implements OnInit {
  temp = {};loadDetails = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogref: MatDialogRef<any>, private fetch: FetchfileserviceService) { }

  ngOnInit() {
    
    this.fetchComments();
  }

  fetchComments(){
    this.loadDetails = true;
    this.fetch.getDueDates(this.data.sample).subscribe((res)=>{
      console.log(res);
      this.temp = res[0];
      this.loadDetails = false;
    });
  }

}
