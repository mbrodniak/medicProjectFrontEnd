import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Patient} from '../model/patient';
import {BehaviorSubject, from, Observable, of} from 'rxjs';
import {Doctor} from '../model/doctor';
import {Appointment} from '../model/appointment';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  token: string;
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor(private httpClient: HttpClient) {

  }

  changeMessage(message: string) {
    console.log('Zmiana id na: ' + message);
    this.messageSource.next(message);
  }


  sendCredentials(patient: Patient, file: File): Observable<Patient> {
    console.log('Send credentials: ' + patient.firstName);
    console.log('Send credentials: ' + patient.lastName);
    console.log('Send credentials: ' + patient.birthDate);
    console.log('Send credentials: ' + patient.ability);
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    const options = {patient, formData};
    return this.httpClient.post<Patient>('http://localhost:8080/medicproject/patient/add', options);
  }

  getAllDoctors(): Observable<Array<Doctor>> {
    const token = sessionStorage.getItem('token');
    console.log('sessionstorage token: ' + token.toString());
    const headers: HttpHeaders = new HttpHeaders({Authorization: sessionStorage.getItem('token').toString()});
    const options = {headers};
    return this.httpClient.get<Array<Doctor>>('http://localhost:8080/medicproject/doctor/all', options);
  }

  changeAppointmentDate(id: string, date: Date): Observable<Array<Appointment>> {
    const headers: HttpHeaders = new HttpHeaders({Authorization: sessionStorage.getItem('token').toString()});
    const params = new HttpParams().set('start', date + ' 08:00:00'/*start.toString()*/).set('end', date + ' 18:00:00'/*end.toString()*/).set('id', id);
    const options = {headers, params};
    return this.httpClient.get<Array<Appointment>>('http://localhost:8080/medicproject/appointment/getBy', options);
  }

  makeAnAppointment(appointment: Appointment): Observable<Appointment> {
    const headers: HttpHeaders = new HttpHeaders({Authorization: sessionStorage.getItem('token').toString()});
    const params = appointment;
    const options = {headers};
    return this.httpClient.post<Appointment>('http://localhost:8080/medicproject/appointment/add', params, options);
  }

  getAppointmentDate(id: string, date: string): Observable<Array<Appointment>> {
    const headers: HttpHeaders = new HttpHeaders({Authorization: sessionStorage.getItem('token').toString()});
    const params = new HttpParams().set('start', date + ' 08:00:00'/*start.toString()*/).set('end', date + ' 22:00:00'/*end.toString()*/).set('id', id);
    const options = {headers, params};
    return this.httpClient.get<Array<Appointment>>('http://localhost:8080/medicproject/appointment/getBy', options);
  }

  getDoctorData(id: string): Observable<Doctor> {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: sessionStorage.getItem('token').toString()
    });
    const params = new HttpParams().set('id', id);
    const options = {headers, params};
    return this.httpClient.get<Doctor>('http://localhost:8080/medicproject/doctor/findBy', options);
  }

  login(email: string, password: string): Observable<User> {
    const base64 = btoa(email + ':' + password).toString();
    const token = ('Basic ' + base64).toString();
    sessionStorage.setItem('token', token);

    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('token').toString()});
    const options = {headers};
    return this.httpClient.post<User>('http://localhost:8080/login', {}, options);
  }

  getUserCredentials(id: string): Observable<User> {
    console.log('Id w getUserCredentials ' + id);
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('token').toString()});
    const params = new HttpParams().set('id', id);
    const options = {headers, params};
    return this.httpClient.get<User>('http://localhost:8080/medicproject/patient/findUserById', options);

  }
}
