import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomePageComponent} from './home-page/home-page.component';
import {AuthGuard} from './auth.guard';
import {DoctorComponent} from './doctor/doctor.component';
import {DoctorDetailComponent} from './doctor-detail/doctor-detail.component';


const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  // {path: 'register', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomePageComponent, canActivate: [AuthGuard]},
  {path: 'doctors', component: DoctorComponent, canActivate: [AuthGuard]},
  {path: 'doctor/:id', component: DoctorDetailComponent},
  // {path: 'employerLogin', component: EmployerLoginComponent},
  // {path: 'employerPage', component: EmployerPageComponent},
  // {path: 'doctorPage', component: DoctorPageComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes, {enableTracing: true}),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
