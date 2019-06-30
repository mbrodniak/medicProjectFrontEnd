import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {HttpService} from '../service/http.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {User} from '../model/user';
import {interval, Observable, pipe} from 'rxjs';
import {delay, map, tap} from 'rxjs/operators';
import {dashCaseToCamelCase} from '@angular/compiler/src/util';
import {Patient} from '../model/patient';
import {Doctor} from '../model/doctor';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  // id: string;
  patient: Patient;
  doctorSpec: string;
  doctors: Array<Doctor> = [];
  storage = '';
  user: User;

  constructor(private httpClient: HttpClient, private httpService: HttpService, private router: Router, private route: ActivatedRoute) {
    this.getCrendetials();
  }
  getToken() {
    console.log('getToken() active');
    console.log('sessionstorage length: ' + sessionStorage.length);
    this.storage = sessionStorage.getItem('token');
    this.httpService.currentMessage.subscribe(data => console.log(data.username));
    console.log(this.storage);
  }
  getMessage() {
    this.httpService.currentMessage.subscribe(message => console.log(message.username));
  }

  ngOnInit() {
    // console.log('Id w ngOnInit: ' + this.id);
  }
  getCrendetials() {
    this.httpService.currentMessage.subscribe(data => {console.log('Dane w getCredentials HMP: ' + this.user); this.user = data; });
    // this.httpService.getUserCredentials(this.user.id.toString()).subscribe(data => {
    //   this.patient = data['patient'];
    // });
  }
  getId() {
    console.log(this.patient.firstName);
  }

  logout() {
    sessionStorage.setItem('token', '');
  }
  findBySpec() {
    this.httpService.findByDoctorSpecialization(this.doctorSpec).subscribe(data => {
      this.doctors = data;
    });
  }
  showDoctor(doctor: Doctor) {
    console.log(doctor.doctorId);
    this.router.navigate(['/doctorDetail/7']);
  }
}
