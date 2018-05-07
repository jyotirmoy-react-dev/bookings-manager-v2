import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sample-component',
  template: `
    <p [title]="passcode">
      {{sample}}
    </p>
  `,
  styles: []
})
export class SampleComponentComponent implements OnInit {
  @Input() sample = '';
  @Input() passcode = '';
  constructor() { }

  ngOnInit() {
  }

}
