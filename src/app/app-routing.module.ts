import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerhomeComponent} from './customerhome/customerhome.component';
import { AppmainComponent } from './appmain/appmain.component';
import { Page404NotFoundComponent } from './page404-not-found/page404-not-found.component';
import { ExistingenquiriesComponent } from './existingenquiries/existingenquiries.component';
import { AuthguardService } from './authguard.service';
import { ManagehotelComponent } from './managehotel/managehotel.component';
import { AddhotelComponent } from './addhotel/addhotel.component';
import { HomepageserviceService } from './homepageservice.service';
import { CategoriesComponent } from './categories/categories.component';
import { TransportsComponent } from './transports/transports.component';
import { RoomtypesComponent } from './roomtypes/roomtypes.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: CustomerhomeComponent, pathMatch: 'full' , canActivate: [AuthguardService] },
  { path: 'managehotel/:id', component: ManagehotelComponent, pathMatch: 'full', canActivate: [AuthguardService]},
  { path: 'hotels', component: ExistingenquiriesComponent, pathMatch: 'full', canActivate:[AuthguardService]},
  { path: 'addhotel', component: AddhotelComponent, pathMatch: 'full', canActivate: [AuthguardService]},
  { path: 'categories', component: CategoriesComponent, pathMatch: 'full', canActivate: [AuthguardService]},
  { path: 'transports', component: TransportsComponent, pathMatch: 'full', canActivate: [AuthguardService]},
  { path: 'roomtypes', component: RoomtypesComponent, pathMatch: 'full', canActivate: [AuthguardService]},
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  { path: '**' , component: Page404NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthguardService],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
