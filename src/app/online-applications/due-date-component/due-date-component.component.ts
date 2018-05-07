import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-due-date-component',
  template: `
    <p [title]="title_1">
      <span [innerHTML]="due_date"></span>
    </p>
  `,
  styles: []
})
export class DueDateComponentComponent implements OnInit {
  @Input() title_1 = '';
  @Input() due_date = '';
  constructor() { }

  ngOnInit() {
  }

}
