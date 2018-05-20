import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerinfo',
  template: `
    <button mat-button (click)="gotoInfo()">{{firstname}} {{lastname}}</button>
  `,
  styles: []
})
export class CustomerinfoComponent implements OnInit {
  @Input() id = '';
  @Input() firstname = '';
  @Input() lastname = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoInfo(){
    this.router.navigate(['newcustomer', { id: this.id}]);
  }

}
