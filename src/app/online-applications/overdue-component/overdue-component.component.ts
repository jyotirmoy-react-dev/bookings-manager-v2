import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-overdue-component',
  template: `
      <p [style.color]="due=='Days Overdue'?'#DF0101':'#000000'">
        <span *ngIf="due_date!=''">
          {{not}}
          <span [innerHTML]="over"></span>
          <span [innerHTML]="duestr"></span>
        </span>
      </p>
  `,
  styles: []
})
export class OverdueComponentComponent implements OnInit {
  @Input() overdue = '';
  @Input() due_date = '';
  @Input() due = '';
  @Input() next_step = '';
  not = ''; over = ''; duestr = '';
  constructor() { }

  ngOnInit() {
    
    if (this.overdue && parseInt(this.overdue) > 0){
      this.not = ''; this.over = this.overdue; this.duestr = 'Days Overdue';
    }
    else {
      this.not = "Due in";
      this.due = "Days";
      this.over = (parseInt(this.overdue) * (-1)).toString();
    }

    if (this.next_step == 'step 1 of 6, Costing') {
      this.not = ''; this.over = this.overdue; this.duestr = '';
    }
    if (this.due_date == "n/a") {
      this.over = "n/a";
      this.not = "";
      this.due = "";
    }
  }

}
