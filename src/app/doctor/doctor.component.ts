import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Doctor} from '../model/doctor';
import {HttpClient} from '@angular/common/http';
import {HttpService} from '../service/http.service';
import {Router} from '@angular/router';
import {User} from '../model/user';
import {TokenStorageService} from '../token-storage.service';
import {stringify} from 'querystring';
import {DoctorService} from '../service/doctor.service';
import {collectExternalReferences} from '@angular/compiler';
import {pipe} from 'rxjs';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit{

  doctorList: Array<Doctor> = [];

  constructor(private doctor: Doctor, private tokenStorage: TokenStorageService, private httpService: HttpService,
              private router: Router, private doctorService: DoctorService) {
    console.log('Konstruktor!');
  }

  ngOnInit() {
    console.log('NgOnInit');
    this.httpService.getDoctors().subscribe(data => {
      console.log(data);
      data.forEach(doctor => this.doctorList.push(doctor));
    });
  }

  showDoctor(doctor: Doctor) {
    this.router.navigate(['doctor', doctor.id]);
  }
}
