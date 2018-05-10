import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerhomeComponent} from './customerhome/customerhome.component';
import { AppmainComponent } from './appmain/appmain.component';
import { Page404NotFoundComponent } from './page404-not-found/page404-not-found.component';
import { ExistingenquiriesComponent } from './existingenquiries/existingenquiries.component';
import { OnlineApplicationsComponent } from './online-applications/online-applications.component';
import { AuthguardService } from './authguard.service';
import { ManagehotelComponent } from './managehotel/managehotel.component';
import { AddhotelComponent } from './addhotel/addhotel.component';
import { HomepageserviceService } from './homepageservice.service';
import { CategoriesComponent } from './categories/categories.component';
import { TransportsComponent } from './transports/transports.component';
import { RoomtypesComponent } from './roomtypes/roomtypes.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: '', component: CustomerhomeComponent, canActivate: [AuthguardService]},
  { path: 'appmain', component: AppmainComponent, canActivate: [AuthguardService] },
  { path: 'managehotel/:id', component: ManagehotelComponent, canActivate: [AuthguardService]},
  { path: 'hotels', component: ExistingenquiriesComponent, canActivate:[AuthguardService]},
  { path: 'addhotel', component: AddhotelComponent, canActivate: [AuthguardService]},
  { path: 'categories', component: CategoriesComponent, canActivate: [AuthguardService]},
  { path: 'transports', component: TransportsComponent, canActivate: [AuthguardService]},
  { path: 'roomtypes', component: RoomtypesComponent, canActivate: [AuthguardService]},
  { path: 'login', component: LoginComponent},
  { path: '**' , component: Page404NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthguardService],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
