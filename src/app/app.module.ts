import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HireForWorkModule } from './hire-for-work/hire-for-work.module';
import { BrowseWorkModule } from './browse-work/browse-work.module';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SelectSignupComponent } from './select-signup/select-signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
// import {AgmCoreModule} from '@agm/core'
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavbarComponent,
    MainSectionComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    SignUpComponent,
    SelectSignupComponent,
    LoginComponent,
    DashboardComponent,
    LogoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HireForWorkModule,
    BrowseWorkModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    // ...
  NavbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
