import { Component, OnInit } from '@angular/core';
import {Doctor} from '../model/doctor';
import {HttpClient} from '@angular/common/http';
import {HttpService} from '../service/http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  doctorList: Array<Doctor> = [];
  doctorDetail: Doctor;

  constructor(private doctor: Doctor, private httpClient: HttpClient, private httpService: HttpService,
              private router: Router) { }

  ngOnInit() {
    this.httpService.getAllDoctors().subscribe(data =>
      this.doctorList = data);
  }
  showDoctor(doctor: Doctor) {
    this.doctorDetail = doctor;
    this.router.navigate(['/doctorDetail', this.doctorDetail.doctorId]);
  }


}
