import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-company-component',
  template: `
    <p>
      Company: {{company}}
       <br/> Contact: {{contact}}
       <br/> Email: <a href=\"mailto:{{contact_email}}?Subject=Follow up to your estimate ref $eno from NSF-WRc\">{{contact_email}}</a>
    </p>
  `,
  styles: []
})
export class CompanyComponentComponent implements OnInit {
  @Input() company = '';
  @Input() contact = '';
  @Input() contact_email = '';
  constructor() { }

  ngOnInit() {
  }

}
