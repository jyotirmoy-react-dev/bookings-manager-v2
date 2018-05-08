import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerhomeComponent} from './customerhome/customerhome.component';
import { AppmainComponent } from './appmain/appmain.component';
import { Page404NotFoundComponent } from './page404-not-found/page404-not-found.component';
import { ExistingenquiriesComponent } from './existingenquiries/existingenquiries.component';
import { OnlineApplicationsComponent } from './online-applications/online-applications.component';
import { NewOnlineApplicationComponent } from './new-online-application/new-online-application.component';
import { Page1ComponentComponent } from './new-online-application/page1-component/page1-component.component';
import { OnlineapplicationComponent } from './new-online-application/onlineapplication/onlineapplication.component';
import { Page2Component } from './new-online-application/page2/page2.component';
import { AuthguardService } from './authguard.service';
import { ManagehotelComponent } from './managehotel/managehotel.component';
import { AddhotelComponent } from './addhotel/addhotel.component';
import { HomepageserviceService } from './homepageservice.service';
const routes: Routes = [
  { path: '', component: CustomerhomeComponent },
  { path: 'appmain', component: AppmainComponent },
  { path: 'managehotel/:id', component: ManagehotelComponent, canActivate: [AuthguardService]},
  { path: 'hotels', component: ExistingenquiriesComponent, canActivate:[AuthguardService]},
  { path: 'addhotel', component: AddhotelComponent, canActivate: [AuthguardService]},
  { path: 'newonlineapplication/:pagetype', component: NewOnlineApplicationComponent},
  { path: '**' , component: Page404NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthguardService],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
