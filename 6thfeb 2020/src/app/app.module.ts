import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { HttpClientModule} from '@angular/common/http';
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



// import { AdminLandingComponent } from './admin-landing/admin-landing.component';

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
    
    // AdminLandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }