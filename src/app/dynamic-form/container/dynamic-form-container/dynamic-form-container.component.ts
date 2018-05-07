import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-container',
  template: `
    <form [formGroup]="form" (ngSubmit)="submitForm.emit(form.value)">
      <ng-container *ngFor="let field of config" appDynamicForm [config]="field" [group]="form"></ng-container>
    </form>
  `,
  styleUrls: ['./dynamic-form-container.component.css']
})
export class DynamicFormContainerComponent implements OnInit {
  form: FormGroup;
  @Input() config: any[] = [];
  @Output() submitForm: EventEmitter<any> = new EventEmitter<any>();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.createForm();
  }

  createForm() {
    // Dynamically Creating Form Group
    const group = this.fb.group({});
    this.config.forEach(control => group.addControl(control.name, this.fb.control([control.value])));
    return group;
  }

  

}
