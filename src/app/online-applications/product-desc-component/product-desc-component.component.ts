import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-desc-component',
  template: `
    <p [title]="prod_description">
      <span [innerHTML]="prod_description_short"></span>
    </p>
  `,
  styles: []
})
export class ProductDescComponentComponent implements OnInit {
  @Input() prod_description = '';
  @Input() prod_description_short = '';
  constructor() { }

  ngOnInit() {
  }

}
