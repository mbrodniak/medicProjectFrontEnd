import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';
import {HomePageComponent} from './home-page/home-page.component';
import {DoctorComponent} from './doctor/doctor.component';
import {DoctorDetailComponent} from './doctor-detail/doctor-detail.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'register', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home/:id', component: HomePageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'doctors', component: DoctorComponent},
  {path: 'doctorDetail/:id', component: DoctorDetailComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes, {enableTracing: true}),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
