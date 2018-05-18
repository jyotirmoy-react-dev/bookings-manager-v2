import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { FetchfileserviceService } from './fetchfileservice.service';
import { AppauthsetupService } from './appauthsetup.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Page404NotFoundComponent } from './page404-not-found/page404-not-found.component';

import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import { HomepageserviceService } from './homepageservice.service';
import { MatTableModule } from '@angular/material/table';
import { ExistingenquiriesComponent } from './existingenquiries/existingenquiries.component';
import { ExistingenquiryserviceService } from './existingenquiries/existingenquiryservice.service';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AmComponent } from './existingenquiries/am.component';
import { ActionComponentComponent } from './existingenquiries/action-component/action-component.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule, MatSelectModule, MatCheckboxModule, 
  MatTooltipModule, MatChipsModule, MatSnackBarModule, MatRadioModule, MatInputModule,
   MatToolbarModule, MatSidenavModule, MatTabsModule, MatStepperModule } from '@angular/material';

import { LoaderComponent } from './loader/loader.component';
import { AuthguardService } from './authguard.service';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';

import { ManagehotelComponent } from './managehotel/managehotel.component';
import { AddhotelComponent } from './addhotel/addhotel.component';
import { AddhotelService } from './addhotel/addhotel.service';
import { ManagehotelService } from './managehotel/managehotel.service';
import { RoomtypesComponent } from './roomtypes/roomtypes.component';
import { TransportationComponent } from './managehotel/transportation/transportation.component';
import { CategoriesService } from './managehotel/categories/categories.service';
import { TransportationService } from './managehotel/transportation/transportation.service';
import { TransportsComponent } from './transports/transports.component';
import { CategoriesComponent } from './categories/categories.component';
import { HotelCategoriesComponent } from './managehotel/categories/Hotelcategories.component';
import { HotelRoomtypesComponent } from './managehotel/roomtypes/Hotelroomtypes.component';
import { RoomtypesService } from './managehotel/roomtypes/roomtypes.service';
import { LoginComponent } from './login/login.component';
import { HoteltemplateComponent } from './hoteltemplate/hoteltemplate.component';
import { CustomersModule } from './customers/customers.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomerhomeComponent,
    Page404NotFoundComponent,
    ExistingenquiriesComponent,
    AmComponent,
    ActionComponentComponent,

    ManagehotelComponent,
    AddhotelComponent,
    TransportationComponent,
    TransportsComponent,
    CategoriesComponent,
    HotelCategoriesComponent,
    HotelRoomtypesComponent,
    RoomtypesComponent,
    LoginComponent,
    HoteltemplateComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    MatGridListModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatChipsModule,
    MatSnackBarModule,
    MatRadioModule,
    MatInputModule,
    DynamicFormModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTabsModule,
    CustomersModule,
    MatStepperModule
  ],
  providers: [FetchfileserviceService,AddhotelService,ManagehotelService,CategoriesService,TransportationService,RoomtypesService,{
    provide:HTTP_INTERCEPTORS,
    useClass: AppauthsetupService,
    multi:true
  },
    HomepageserviceService, ExistingenquiryserviceService, AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
