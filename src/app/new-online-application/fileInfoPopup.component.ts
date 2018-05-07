import { Component, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-file-info',
    template: `
        {{title}}:
         <a href=""><mat-icon (click)="openDialog($event)">open_in_new</mat-icon></a>
            

    `
})
export class FileInfoComponent {

    @Input() details = '';
    @Input() title = '';
    constructor(public dialog: MatDialog) { }

    openDialog(e): void {
        e.preventDefault();
        let dialogRef = this.dialog.open(FileInfoPopupComponent, {
            width: '250px',
            data: { details: this.details}
        });
    }

}

@Component({
    selector: 'app-popup-info',
    template: `
    <p [innerHTML]="data.details"></p>
    `,
})
export class FileInfoPopupComponent {

    constructor(
        public dialogRef: MatDialogRef<FileInfoPopupComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}