import { Directive, Input, ViewContainerRef, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormInputComponent } from './form-input/form-input.component';
import { FormSelectComponent } from './form-select/form-select.component';
import { FormButtonComponent } from './form-button/form-button.component';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';
const components = {
  input: FormInputComponent,
  select: FormSelectComponent,
  button: FormButtonComponent,
  checkbox: FormCheckboxComponent
};
@Directive({
  selector: '[appDynamicForm]'
})
export class DynamicFormDirective implements OnInit {
  @Input() config;
  @Input() group: FormGroup;
  component;
  constructor(private contianer: ViewContainerRef, private resolver: ComponentFactoryResolver) { }
  ngOnInit() {
    const component = components[this.config.type];
    const factory = this.resolver.resolveComponentFactory<any>(component);
    this.component = this.contianer.createComponent(factory);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }
}
