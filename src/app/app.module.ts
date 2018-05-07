import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { NsfnewslistComponent } from './nsfnewslist/nsfnewslist.component';
import { ManagemyfilesComponent } from './managemyfiles/managemyfiles.component';
import { FetchfileserviceService } from './fetchfileservice.service';
import { AppauthsetupService } from './appauthsetup.service';
import { AppmainComponent } from './appmain/appmain.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PamsnewsComponent } from './pamsnews/pamsnews.component';
import { Page404NotFoundComponent } from './page404-not-found/page404-not-found.component';
import { NewAppSetupComponent } from './new-app-setup/new-app-setup.component';
import { SubmitNewAppComponent } from './submit-new-app/submit-new-app.component';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ExistingAppsComponent } from './existing-apps/existing-apps.component';
import { HomepageserviceService } from './homepageservice.service';
import { MatTableModule } from '@angular/material/table';
import { NewappsetupServeService } from './new-app-setup/newappsetup-serve.service';
import { SubmitwrasapprovalComponent } from './submitwrasapproval/submitwrasapproval.component';
import { ExistingenquiriesComponent } from './existingenquiries/existingenquiries.component';
import { ExistingenquiryserviceService } from './existingenquiries/existingenquiryservice.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { EnoComponent } from './existingenquiries/eno.component';
import { AmComponent } from './existingenquiries/am.component';
import { CompanyComponentComponent } from './existingenquiries/company-component/company-component.component';
import { DocsComponentComponent } from './existingenquiries/docs-component/docs-component.component';
import { CustInfoComponentComponent } from './existingenquiries/cust-info-component/cust-info-component.component';
import { ProvidedDateComponentComponent } from './existingenquiries/provided-date-component/provided-date-component.component';
import { ActionComponentComponent } from './existingenquiries/action-component/action-component.component';
import { OnlineApplicationsComponent } from './online-applications/online-applications.component';
import { SampleComponentComponent } from './online-applications/sample-component/sample-component.component';
import { StatusComponentComponent } from './online-applications/status-component/status-component.component';
import { ProductDescComponentComponent } from './online-applications/product-desc-component/product-desc-component.component';
import { DueDateComponentComponent } from './online-applications/due-date-component/due-date-component.component';
import { OverdueComponentComponent } from './online-applications/overdue-component/overdue-component.component';
import { BackButtonComponentComponent } from './back-button-component/back-button-component.component';
import { ViewstatComponentComponent } from './online-applications/viewstat-component/viewstat-component.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ViewnotesComponentComponent,
   ViewnotesDialogComponent } from './online-applications/viewnotes-component/viewnotes-component.component';
import { MatProgressSpinnerModule, MatSelectModule, MatCheckboxModule, 
  MatTooltipModule, MatChipsModule, MatSnackBarModule, MatRadioModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { NewOnlineApplicationComponent } from './new-online-application/new-online-application.component';
import { NewappserviceService } from './new-online-application/newappservice.service';

import { AppmainserviceService } from './appmain/appmainservice.service';
import { Page1ComponentComponent } from './new-online-application/page1-component/page1-component.component';
import { Page1Service } from './new-online-application/page1-component/page1.service';
import { PageStepperComponent } from './new-online-application/page-stepper/page-stepper.component';
import { OnlineapplicationComponent } from './new-online-application/onlineapplication/onlineapplication.component';
import { Page2Component } from './new-online-application/page2/page2.component';
import { LoaderComponent } from './loader/loader.component';
import { AuthguardService } from './authguard.service';
import { FilterResultPipe } from './new-online-application/filter-result.pipe';
import { OnlineappService } from './new-online-application/onlineapplication/onlineapp.service';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { Page2Service } from './new-online-application/page2/page2.service';
@NgModule({
  declarations: [
    AppComponent,
    CustomerhomeComponent,
    NsfnewslistComponent,
    ManagemyfilesComponent,
    AppmainComponent,
    PamsnewsComponent,
    Page404NotFoundComponent,
    NewAppSetupComponent,
    SubmitNewAppComponent,
    ExistingAppsComponent,
    SubmitwrasapprovalComponent,
    ExistingenquiriesComponent,
    EnoComponent,
    AmComponent,
    CompanyComponentComponent,
    DocsComponentComponent,
    CustInfoComponentComponent,
    ProvidedDateComponentComponent,
    ActionComponentComponent,
    OnlineApplicationsComponent,
    SampleComponentComponent,
    StatusComponentComponent,
    ProductDescComponentComponent,
    DueDateComponentComponent,
    OverdueComponentComponent,
    BackButtonComponentComponent,
    ViewstatComponentComponent,
    ViewnotesComponentComponent,
    ViewnotesDialogComponent,
    NewOnlineApplicationComponent,
    Page1ComponentComponent,
    PageStepperComponent,
    OnlineapplicationComponent,
    Page2Component,
    LoaderComponent,
    FilterResultPipe    
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
    MatToolbarModule
  ],
  entryComponents: [ViewnotesDialogComponent],
  providers: [FetchfileserviceService,{
    provide:HTTP_INTERCEPTORS,
    useClass: AppauthsetupService,
    multi:true
  },
    HomepageserviceService, NewappsetupServeService, ExistingenquiryserviceService,
     NewappserviceService, AppmainserviceService, Page1Service, AuthguardService, OnlineappService,Page2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
