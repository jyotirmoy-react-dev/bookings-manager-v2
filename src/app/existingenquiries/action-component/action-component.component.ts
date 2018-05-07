import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-action-component',
  template: `
    <p>
      <button mat-raised-button color="primary" (click)="submitOnline()">Submit Online Application</button>
      <button mat-raised-button color="accent" (click)="uploadf2Form()">Upload F2 Form</button>
    </p>
  `,
  styles: []
})
export class ActionComponentComponent implements OnInit {
  @Input() eno = '';
  @Input() contract = '';
  @Input() passcode = '';
  constructor() { }

  ngOnInit() {
  }
  submitOnline(){
    let send_data = {
      "new_app":'yes',
      "eno": this.eno,
      "contract": this.contract,
      "passcode": this.passcode
    };
    console.log(send_data);
  }
  uploadf2Form(){
    let send_data = {
      "new_app": 'yes',
      "eno": this.eno,
      "contract": this.contract,
      "passcode": this.passcode
    };
    console.log(send_data);
  }
}
