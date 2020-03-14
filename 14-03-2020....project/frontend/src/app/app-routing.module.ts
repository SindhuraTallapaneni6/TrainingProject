import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from '../app/login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UsersComponent } from './user/users/users.component';
import { UpdateUsersComponent} from './user/update-users/update-users.component';
import { HomeComponent } from '../app/home/home.component';
import { AdminLandingComponent } from '../app/admin-landing/admin-landing.component';
import { UserlandingComponent } from '../app/userlanding/userlanding.component';
import { ImportdataComponent } from '../app/importdata/importdata.component';
import { CompareCompanyComponent } from '../app/compare-company/compare-company.component';
import { ManagecompanyComponent } from '../app/managecompany/managecompany.component';
import { AddCompanyComponent } from '../app/managecompany/add-company/add-company.component';
import { DeleteCompanyComponent } from '../app/managecompany/delete-company/delete-company.component';
import { ManageexchangeComponent } from '../app/manageexchange/manageexchange.component';
import { AddipoComponent } from '../app/addipo/addipo.component';
import { CompanyComponent } from './company/company.component';
import { ComparesectorsComponent } from './comparesectors/comparesectors.component';
import { UpdateCompanyComponent } from './managecompany/update-company/update-company.component';
import { UpdateIPODetailsComponent } from './update-ipo-details/update-ipo-details.component';
import { IpoComponent } from './ipo/ipo.component';
import { ActivateComponent } from './activate/activate.component';
import { StocksComponent } from './stocks/stocks.component';
import { UpdateStockexchangeComponent } from './update-stockexchange/update-stockexchange.component';
import { SectorComponent } from './sector/sector.component';
import { AddsectorComponent } from './addsector/addsector.component';
import { UpdatesectorComponent } from './updatesector/updatesector.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ChartsComponent } from './charts/charts.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { LogoutComponent } from './logout/logout.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';
import { UpdateprofileComponent } from './user/userprofile/updateprofile/updateprofile.component';
import {  ChangepasswordComponent } from './user/userprofile/changepassword/changepassword.component';
import { UseripoComponent } from './useripo/useripo.component';




const routes: Routes = [
  {path:'', component: HomeComponent},

  {path:'home', component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'sign-up',component: SignUpComponent},
  {path: 'users', component:UsersComponent},
  {path: 'ipo', component: IpoComponent},
  {path: 'manageexchange' , component: ManageexchangeComponent},
  {path:'companylist',component: CompanyComponent},
  { path: 'update-user', component:UpdateUsersComponent},
  { path: 'adminlanding', component:AdminLandingComponent},
  {path:'userlanding',component:UserlandingComponent},
  { path:'importdata',component:ImportdataComponent},
  { path:'compare-company',component:CompareCompanyComponent},
  { path: 'managecompany',component:ManagecompanyComponent},
  { path:'add-company',component:AddCompanyComponent},
  { path:'delete-company',component:DeleteCompanyComponent},
 // { path:'manageexchange',component:ManageexchangeComponent },
  { path:'addipo',component:AddipoComponent },
  { path:'compare-company', component:CompareCompanyComponent},
  { path:'comparesector', component:ComparesectorsComponent},
  { path: 'update-ipo', component: UpdateIPODetailsComponent},
  { path:'update-company', component:UpdateCompanyComponent  },
  { path:'update-stock', component: UpdateStockexchangeComponent},
  { path:'company', component:CompanyComponent},
  { path: 'stock', component: StocksComponent},
  { path:'sector', component:SectorComponent},
  { path:'addsector', component:AddsectorComponent},
  { path:'activate',component: ActivateComponent},
  { path:'aboutus',component:  AboutusComponent},
  { path:'charts', component:ChartsComponent},
  { path:'updatesector', component:  UpdatesectorComponent},
  { path:'logout' , component: LogoutComponent},
  { path:'admin-user' , component: AdminUserComponent},
  { path:'userprofile' , component: UserprofileComponent},
  { path:'updateprofile' , component: UpdateprofileComponent},
  { path:'changepassword' , component:  ChangepasswordComponent},
  { path: 'useripo' , component: UseripoComponent},
  { path:'comparesector' , component: ComparesectorsComponent }
  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
