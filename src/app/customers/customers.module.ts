import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { ManagecustomersComponent } from './managecustomers/managecustomers.component';
import { EditcustomersComponent } from './editcustomers/editcustomers.component';
import { AddcustomerService } from './addcustomer/addcustomer.service';
import { ManagecustomersService } from './managecustomers/managecustomers.service';
import { EditcustomersService } from './editcustomers/editcustomers.service';
import { MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule, MatStepperModule, MatTableModule, MatPaginatorModule, MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { BackButtonComponentComponent } from '../back-button-component/back-button-component.component';
import {MatListModule} from '@angular/material/list';
import { CustomerinfoComponent } from './managecustomers/customerinfo/customerinfo.component';
@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatStepperModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatListModule
  ],
  declarations: [AddcustomerComponent, ManagecustomersComponent, EditcustomersComponent, BackButtonComponentComponent, CustomerinfoComponent],
  exports: [AddcustomerComponent, ManagecustomersComponent, EditcustomersComponent, BackButtonComponentComponent],
  providers: [AddcustomerService, ManagecustomersService, EditcustomersService]
})
export class CustomersModule { }
