import {Injectable} from '@angular/core';
import {Doctor} from '../model/doctor';
import {HttpService} from './http.service';
import {forEach} from '@angular/router/src/utils/collection';
import {pipe, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {async} from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})

export class DoctorService {
  doctorsList = new Subject<Array<Doctor>>();
  doctorListSubject = this.doctorsList.asObservable();
  constructor(private httpService: HttpService) {
  }


  // setDoctorsList() {
  //   this.httpService.getDoctors().subscribe(data => this.doctorsList.next(data));
  // }
  // getDoctorsLength() {
  //   this.doctorListSubject.subscribe(data => console.log('Data: ' + data));
  // }


}
