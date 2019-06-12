import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Doctor} from '../model/doctor';
import {HttpService} from '../service/http.service';
import {ActivatedRoute, ParamMap, Route} from '@angular/router';
import {Appointment} from '../model/appointment';
import {TransformDatePipe} from '../pipes/transform-date.pipe';
import * as moment from 'node_modules/moment/moment.js';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.css'],
})
export class DoctorDetailComponent implements OnInit, OnChanges {

  doctor: Doctor;
  appointment: Array<Appointment> = [];
  date: Date;
  today: string;
  id: string;
  patientId: string;
  newAppointment = new Appointment();
  constructor(private httpService: HttpService, private route: ActivatedRoute) {
    // this.checkTime(this.appointment);
  }

  ngOnInit() {
    console.log('NgOnInit <-------HERE------>');
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id;
    this.today = new Date().toISOString().split('T')[0];
    this.httpService.getAppointmentDate(id, this.today).subscribe(data => this.appointment = data);
    this.httpService.getDoctorData(id).subscribe(data => this.doctor = data);
  }

  changeDate(date: Date) {
    console.log(date);
    this.httpService.changeAppointmentDate(this.id, date).subscribe(data =>
    this.appointment = data);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('NgOnChanges <-------HERE------>');
    //
    // this.httpService.getDoctorById(this.id).subscribe(data =>
    //     this.appointment = data);
    // this.doctor.firstName = this.appointment[0].doctor.firstName;
  }

  getPatientId() {
    this.httpService.currentMessage.subscribe(data => this.patientId = data);
  }

  makeAnAppointment(date: Date, hour: string, patientId: number) {
    console.log(date);
    const d = date.toISOString().split('T')[0];
    console.log(d);
    // this.newAppointment.date = new Date(d);
    this.newAppointment.patientId = patientId;
    this.newAppointment.doctorId = this.id;
    const appDate = d + 'T' + hour + ':00';
    this.newAppointment.date = new Date(appDate);
    console.log(this.newAppointment.doctorId + ', ' + this.newAppointment.date);
    this.httpService.makeAnAppointment(this.newAppointment).subscribe();
  }

}
