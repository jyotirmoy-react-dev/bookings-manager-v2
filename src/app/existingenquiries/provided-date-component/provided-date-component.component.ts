import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-provided-date-component',
  template: `
    <p>
      Date Provided: <br/> {{time}}
    </p>
  `,
  styles: []
})
export class ProvidedDateComponentComponent implements OnInit {
  @Input()  time = ''; 
  constructor() { }

  ngOnInit() {
  }

}
