import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Patient} from '../model/patient';
import {BehaviorSubject, from, Observable, of} from 'rxjs';
import {Doctor} from '../model/doctor';
import {Appointment} from '../model/appointment';
import {User} from '../model/user';
import {logging} from 'selenium-webdriver';
import {Employer} from '../model/employer';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  token: string;
  private messageSource = new BehaviorSubject<User>(null);
  currentMessage = this.messageSource.asObservable();

  private messageSourceDoctor = new BehaviorSubject('');
  doctorCredentials = this.messageSourceDoctor.asObservable();

  constructor(private httpClient: HttpClient) {

  }

  // changeMessage(: string) {
  //   console.log('Zmiana id na: ' + message);
  //   this.messageSource.next(message);
  // }

  changeDoctorCredentials(credentials: number) {
    this.messageSourceDoctor.next(credentials.toString());
  }

  sendFile(file: File): Observable<File> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.httpClient.post<File>('http://localhost:8080/medicproject/patient/send', formData);
  }

  sendCredentials(patient: Patient): Observable<Patient> {
    console.log('Send credentials: ' + patient.firstName);
    console.log('Send credentials: ' + patient.lastName);
    console.log('Send credentials: ' + patient.birthDate);
    console.log('Send credentials: ' + patient.ability);
    return this.httpClient.post<Patient>('http://localhost:8080/medicproject/patient/add', patient);
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
    // this.httpClient.post<User>('http://localhost:8080/login', {}, options).subscribe(data => console.log(data));
    return this.httpClient.post<User>('http://localhost:8080/login', {}, options).pipe(map(data => {
      this.messageSource.next(data); return data; }));
  }

  getUserCredentials(id: string): Observable<User> {
    console.log('Id w getUserCredentials ' + id);
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('token').toString()});
    const params = new HttpParams().set('id', id);
    const options = {headers, params};
    return this.httpClient.get<User>('http://localhost:8080/medicproject/patient/findUserById', options);
  }

  findByDoctorSpecialization(specialization: string): Observable<Array<Doctor>> {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('token').toString()});
    const params = new HttpParams().set('spec', specialization);
    const options = {headers, params};
    return this.httpClient.get<Array<Doctor>>('http://localhost:8080/medicproject/doctor/findBySpecialization', options);
  }

  employerLogin(login: string, password: string): Observable<Employer> {
    const base64 = btoa(login + ':' + password).toString();
    const token = ('Basic ' + base64).toString();
    sessionStorage.setItem('token', token);

    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('token').toString()});
    const options = {headers};

    return this.httpClient.post<Employer>('http://localhost:8080/employerLogin', {}, options);
  }

  getDoctorSchedule(id: string): Observable<Array<Appointment>> {
    const date = new Date().toISOString().split('T')[0];
    console.log('ID: ' +  id);
    // console.log('1: ' + date);
    // console.log('2: ' + date.toISOString().split('T')[0]);
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('token').toString()});
    const params = new HttpParams().set('start', date + ' 08:00:00').set('end', date + ' 22:00:00').set('id', id);
    const options = {headers, params};
    // return null;
    return this.httpClient.get<Array<Appointment>>('http://localhost:8080/medicproject/appointment/getBy', options);
  }

  changePatientAbility(id: number): Observable<string> {
    console.log('Id w serwisie: ' + id);
    const params = new HttpParams().set('id', id.toString());
    return this.httpClient.post<string>('http://localhost:8080/medicproject/patient/updatePatientState', {} , {params});
  }

  getAllNewPatients(): Observable<Array<Patient>> {
    return this.httpClient.get<Array<Patient>>('http://localhost:8080/medicproject/patient/getAllNew');
  }

  getAppointments(): Observable<Array<Appointment>> {
    const date = new Date().toISOString().split('T')[0];
    console.log('Data: ' + date);
    const params = new HttpParams().set('startDate', date + ' 08:00:00').set('endDate', date + ' 22:00:00');
    const options = {params};
    return this.httpClient.get<Array<Appointment>>('http://localhost:8080/medicproject/appointment/getAllByDate', options);
  }


}
