import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormContainerComponent } from './container/dynamic-form-container/dynamic-form-container.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { DynamicFormDirective } from './components/dynamic-form.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { FormCheckboxComponent } from './components/form-checkbox/form-checkbox.component';
import { MatCheckboxModule, MatIconModule, MatButtonModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [DynamicFormContainerComponent, 
    FormInputComponent, 
    FormSelectComponent, 
    FormButtonComponent,
     DynamicFormDirective, 
     FormCheckboxComponent],
  exports: [DynamicFormContainerComponent],
  entryComponents: [FormButtonComponent, FormCheckboxComponent, FormSelectComponent, FormButtonComponent]

})
export class DynamicFormModule { }
