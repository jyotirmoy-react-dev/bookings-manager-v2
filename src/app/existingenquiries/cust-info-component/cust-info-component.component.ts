import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cust-info-component',
  template: `
    <div>
      <div [innerHTML]="customerdetails"></div>
    </div>
  `,
  styles: []
})
export class CustInfoComponentComponent implements OnInit {
  @Input() succesful = '';
  @Input() reason = '';
  @Input() applied = '';
  @Input() viewed = '';
  customerdetails = '';
  constructor() { }

  ngOnInit() {
    this.createCustomerInfo();
  }
  createCustomerInfo(){
    if (this.succesful == 'no' || this.succesful == '') {
      this.customerdetails += 'Successful:' + this.succesful + this.reason + '<br/>';
    }
    this.customerdetails += 'Customer Applied:' + (!this.applied ? '' : this.applied) + '<br/>';
    if (this.viewed && this.viewed.trim() != '') {
      this.customerdetails += 'Viewed by customer:' + this.viewed;
    }
  }
}
