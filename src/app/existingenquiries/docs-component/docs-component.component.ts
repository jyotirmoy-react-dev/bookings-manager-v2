import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-docs-component',
  template: `
    <div>
      {{quote_description}} <br/>
      <div [innerHTML]="document"></div>
    </div>
  `,
  styles: []
})
export class DocsComponentComponent implements OnInit {
  @Input() quote_description = '';
  @Input() document = '';
  constructor() { }

  ngOnInit() {
  }

}
