import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UpdateUsersComponent } from '../app/user/update-users/update-users.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import { LoginComponent } from './login/login.component';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
 import { User } from './models/user';
import { ModelsComponent } from './models/models.component';
import { UsersComponent } from './user/users/users.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
// import { HomeComponent } from './home/home.component';
import { HomeComponent } from '../app/home/home.component';
import { ImportdataComponent } from './importdata/importdata.component';
import { UserlandingComponent } from './userlanding/userlanding.component';
import { ManagecompanyComponent } from './managecompany/managecompany.component';
import { ManageexchangeComponent } from './manageexchange/manageexchange.component';
import { UpdateIPODetailsComponent } from './update-ipo-details/update-ipo-details.component';
import { CompareCompanyComponent } from './compare-company/compare-company.component';
import { AddCompanyComponent } from './managecompany/add-company/add-company.component';
import { DeleteCompanyComponent } from './managecompany/delete-company/delete-company.component';
import { UpdateCompanyComponent } from './managecompany/update-company/update-company.component';
import { AddipoComponent } from './addipo/addipo.component';
import { CompanyComponent } from './company/company.component';
import { ComparesectorsComponent } from './comparesectors/comparesectors.component';
import { IpoComponent } from './ipo/ipo.component';
import { ActivateComponent } from './activate/activate.component';
import { StocksComponent } from './stocks/stocks.component';
import { UpdateStockexchangeComponent } from './update-stockexchange/update-stockexchange.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SectorComponent } from './sector/sector.component';
import { AddsectorComponent } from './addsector/addsector.component';
import { UpdatesectorComponent } from './updatesector/updatesector.component';
import { ChartsComponent } from './charts/charts.component';
import { HighchartsChartComponent } from 'highcharts-angular';
import { AdminnavComponent } from './sidenav/adminnav/adminnav.component';
import { UsernavComponent } from './sidenav/usernav/usernav.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { UserService } from './Service/user.service';
import { HttpinterceptorserviceService } from './Service/httpinterceptorservice.service';
import { LogoutComponent } from './logout/logout.component';

import { UserprofileComponent } from './user/userprofile/userprofile.component';

import { ChangepasswordComponent } from './user/userprofile/changepassword/changepassword.component';
import { UpdateprofileComponent } from './user/userprofile/updateprofile/updateprofile.component';
import { UseripoComponent } from './useripo/useripo.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    AdminLandingComponent,  
    ModelsComponent,
    UsersComponent,
    UpdateUsersComponent,
    HomeComponent,
    ImportdataComponent,
    UserlandingComponent,
    ManagecompanyComponent,
    ManageexchangeComponent,
    UpdateIPODetailsComponent,
    CompareCompanyComponent,
    AddCompanyComponent,
    DeleteCompanyComponent,
    UpdateCompanyComponent,
    AddipoComponent,
    CompanyComponent,
    ComparesectorsComponent,
    IpoComponent,
    ActivateComponent,
    StocksComponent,
    UpdateStockexchangeComponent,
    AboutusComponent,
    SectorComponent,
    AddsectorComponent,
    UpdatesectorComponent,
    ChartsComponent,
    HighchartsChartComponent,
    AdminnavComponent,
    UsernavComponent,
    AdminUserComponent,
    LogoutComponent,
    UpdateprofileComponent,
    UserprofileComponent,
    ChangepasswordComponent,
    UseripoComponent
   
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpinterceptorserviceService,
    multi: true
  }
],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }