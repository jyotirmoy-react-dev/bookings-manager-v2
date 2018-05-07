import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-viewstat-component',
  template: `
    <form method="post" ngNoForm  action="http://nsfaaws6.nsf.org/lab_control_v2/file_update7.php" target="_blank">
        <input type="hidden" name="user" value="verified"/> 
        <input type = "hidden" name="sample_number" value="{{sample_number}}" />
        <button type="submit" mat-raised-button mat-icon-button	color="primary">
        <mat-icon>folder open</mat-icon>
      </button>
   </form>
   <div *ngIf="comments && comments != '' && comments != '0'">
    <form action="file_update7.php?page=board" method="post">
    	 	  <input type="hidden" name="external_user" value="9nHt40%a2@dpzP^sQ"/>
    	 	  <input type = "hidden" name="sample_number" value="{{sample_number}}" />
                       <button type="submit" mat-raised-button mat-icon-button	color="accent">
                     <mat-icon>comment</mat-icon>
                     </button>
    	 	 </form>
    </div>
  `,
  styles: []
})
export class ViewstatComponentComponent implements OnInit {
  @Input() contact_email = '';
  @Input() email = '';
  @Input() extra_contact_access = '';
  @Input() unique_app_id = '';
  @Input() comments = '';
  @Input() sample_number = '';
  constructor() { }

  ngOnInit() {
  }

}
