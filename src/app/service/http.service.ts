import { Injectable } from '@angular/core';
import {AuthLoginInfo} from '../model/authLoginInfo';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JwtResponse} from '../model/jwtResponse';
import {Doctor} from '../model/doctor';
import {ScheduleResponse} from '../model/scheduleResponse';



@Injectable({
  providedIn: 'root'
})
export class HttpService {



  constructor(private httpClient: HttpClient) {
  }

  getDoctors(): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>('http://localhost:8080/api/doctor/all');
  }

  getDoctor(doctorId: string): Observable<Doctor> {
    const params = new HttpParams().set('id', doctorId);
    return this.httpClient.get<Doctor>('http://localhost:8080/api/doctor/id', {params});
  }

  getAppointments(date: string, id: string): Observable<Array<string>> {
    const params = new HttpParams().set('date', date).set('id', id);
    return this.httpClient.get<Array<string>>('http://localhost:8080/api/appointment/date', {params});
  }

}
