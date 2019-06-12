import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {HttpService} from '../service/http.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {User} from '../model/user';
import {interval, Observable, pipe} from 'rxjs';
import {delay, map, tap} from 'rxjs/operators';
import {dashCaseToCamelCase} from '@angular/compiler/src/util';
import {Patient} from '../model/patient';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  id: string;
  patient: Patient;

  constructor(private httpClient: HttpClient, private httpService: HttpService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {

  }
  getCrendetials() {
    this.httpService.currentMessage.subscribe(data => this.id = data);
    this.httpService.getUserCredentials(this.id).subscribe(data => {
      this.patient = data['patient'];
    });
  }
  getId() {
    console.log(this.patient.firstName);
  }

  logout() {
    sessionStorage.setItem('token', '');
  }
}
