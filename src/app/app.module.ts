import { BrowserModule } from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Patient} from './model/patient';
import { RegistrationComponent } from './registration/registration.component';
import { AppRoutingModule } from './app-routing.module';
import {Doctor} from './model/doctor';
import { HomePageComponent } from './home-page/home-page.component';
import {User} from './model/user';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorDetailComponent } from './doctor-detail/doctor-detail.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import {Appointment} from './model/appointment';
import { ScheduleComponent } from './schedule/schedule.component';
import { TransformDatePipe } from './pipes/transform-date.pipe';
import {Token} from './model/token';
import { DoctorsSpecDirective } from './directive/doctors-spec.directive';
import { NewsWidgetDirective } from './directive/news-widget.directive';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { EmployerLoginComponent } from './employer-login/employer-login.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { DoctorPageComponent } from './doctor-page/doctor-page.component';
import { EmployerPageComponent } from './employer-page/employer-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomePageComponent,
    DoctorComponent,
    DoctorDetailComponent,
    MainNavbarComponent,
    ScheduleComponent,
    TransformDatePipe,
    DoctorsSpecDirective,
    NewsWidgetDirective,
    EmployerLoginComponent,
    DoctorLoginComponent,
    DoctorPageComponent,
    EmployerPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [Patient, User, Doctor, Appointment, Token],
  bootstrap: [AppComponent]
})
export class AppModule {


}


