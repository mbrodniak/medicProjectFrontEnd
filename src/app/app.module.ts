import { BrowserModule } from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Patient} from './model/patient';
import { AppRoutingModule } from './app-routing.module';
import {Doctor} from './model/doctor';
import {User} from './model/user';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import {Appointment} from './model/appointment';
import { TransformDatePipe } from './pipes/transform-date.pipe';
import {Token} from './model/token';
import { DoctorsSpecDirective } from './directive/doctors-spec.directive';
import { NewsWidgetDirective } from './directive/news-widget.directive';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { EmployerLoginComponent } from './employer-login/employer-login.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import {AuthGuard} from './auth.guard';
import {AuthInterceptor} from './authInterceptor';
import {HomePageComponent} from './home-page/home-page.component';
import {DoctorComponent} from './doctor/doctor.component';
import {DoctorDetailComponent} from './doctor-detail/doctor-detail.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {ScheduleResponse} from './model/scheduleResponse';
import { HourDirective } from './directive/hour.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainNavbarComponent,
    TransformDatePipe,
    DoctorsSpecDirective,
    NewsWidgetDirective,
    EmployerLoginComponent,
    DoctorLoginComponent,
    HomePageComponent,
    DoctorComponent,
    DoctorDetailComponent,
    ScheduleComponent,
    HourDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [Patient, User, Doctor, ScheduleResponse, Appointment, Token, AuthGuard, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {


}


