import { Component, OnInit } from '@angular/core';
import {Doctor} from '../model/doctor';
import {HttpClient} from '@angular/common/http';
import {HttpService} from '../service/http.service';
import {Router} from '@angular/router';
import {User} from '../model/user';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  doctorList: Array<Doctor> = [];
  doctorDetail: Doctor;
  user: User;

  constructor(private doctor: Doctor, private httpClient: HttpClient, private httpService: HttpService,
              private router: Router) {
    this.httpService.currentMessage.subscribe(user => console.log(typeof user));
  }

  ngOnInit() {
    this.httpService.getAllDoctors().subscribe(data =>
      this.doctorList = data);
  }
  showDoctor(doctor: Doctor) {
    this.doctorDetail = doctor;
    this.router.navigate(['/doctorDetail', this.doctorDetail.doctorId]);
  }


}
