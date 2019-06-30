import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';
import {HomePageComponent} from './home-page/home-page.component';
import {DoctorComponent} from './doctor/doctor.component';
import {DoctorDetailComponent} from './doctor-detail/doctor-detail.component';
import {EmployerLoginComponent} from './employer-login/employer-login.component';
import {EmployerPageComponent} from './employer-page/employer-page.component';
import {DoctorPageComponent} from './doctor-page/doctor-page.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'register', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home/:id', component: HomePageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'doctors', component: DoctorComponent},
  {path: 'doctorDetail/:id', component: DoctorDetailComponent},
  {path: 'employerLogin', component: EmployerLoginComponent},
  {path: 'employerPage', component: EmployerPageComponent},
  {path: 'doctorPage', component: DoctorPageComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes, {enableTracing: true}),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
