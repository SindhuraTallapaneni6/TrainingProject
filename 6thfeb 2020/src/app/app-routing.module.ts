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




const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'signup',component: SignUpComponent},
  { path: 'users', component:UsersComponent},
  {path:'companylist',component: CompanyComponent},
  { path: 'update-user', component:UpdateUsersComponent},
  { path: 'adminlanding', component:AdminLandingComponent},
  {path:'userlanding',component:UserlandingComponent},
  { path:'importdata',component:ImportdataComponent},
  { path:'compare-company',component:CompareCompanyComponent},
  { path: 'managecompany',component:ManagecompanyComponent},
  { path:'add-company',component:AddCompanyComponent},
  { path:'delete-company',component:DeleteCompanyComponent},
  { path:'manageexchange',component:ManageexchangeComponent },
  { path:'addipo',component:AddipoComponent },
  { path:'compare-company', component:CompareCompanyComponent},
  { path:'comparesector', component:ComparesectorsComponent},
  { path:'addipo',component:AddipoComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
