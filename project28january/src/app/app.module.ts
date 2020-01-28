import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import { LoginComponent } from './login/login.component';
// import { SignupComponent } from './signup/signup.component';
// import { AdminLandingComponent } from './admin-landing/admin-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // SignupComponent,
    // AdminLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
