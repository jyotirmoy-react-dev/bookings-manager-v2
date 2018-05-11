import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { ManagecustomersComponent } from './managecustomers/managecustomers.component';
import { EditcustomersComponent } from './editcustomers/editcustomers.component';
import { AddcustomerService } from './addcustomer/addcustomer.service';
import { ManagecustomersService } from './managecustomers/managecustomers.service';
import { EditcustomersService } from './editcustomers/editcustomers.service';
import { MatCardModule, MatFormFieldModule, MatIconModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatIconModule
  ],
  declarations: [AddcustomerComponent, ManagecustomersComponent, EditcustomersComponent],
  exports: [AddcustomerComponent, ManagecustomersComponent, EditcustomersComponent],
  providers: [AddcustomerService, ManagecustomersService, EditcustomersService]
})
export class CustomersModule { }
