import {Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, DoCheck} from '@angular/core';
import {HttpService} from '../service/http.service';
import {ActivatedRoute} from '@angular/router';
import {Appointment} from '../model/appointment';
import {DoctorDetailComponent} from '../doctor-detail/doctor-detail.component';
import {Doctor} from '../model/doctor';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit, OnChanges, DoCheck {
  doctor: Doctor;
  days: Array<string> = new Array<string>();
  @Input() appointment: Array<Appointment>;
  day: string;
  date: Date = new Date();
  hours: Array<string> = new Array<string>();
  id: string;
  workingHours = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00',
    '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'];
  constructor(private httpService: HttpService, private route: ActivatedRoute,
              private app: Appointment, private doctorDetail: DoctorDetailComponent) { }

  ngOnInit() {
    console.log('NgOnInit Schedule <-----HERE----->');
    this.appointment.filter(data => this.doctor = data.doctor);
    // this.getDayName();
    this.day = new Date().toString();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('NgOnChanges Schedule <-----HERE----->');
    console.log(this.days.length);
    if (this.days.length > 0 ) {
      this.days = [];
    }
    this.appointment.filter(data => this.days.push(data.date.toString()));
    this.getDayName();
    this.getHours();
  }
  ngDoCheck(): void {
    console.log('<-----NGDOCHECK SCHEDULE----->');
  }

  getDayName() {
    for (const d of this.days) {
      // this.day = null;
      if (this.day !== d) {
          this.day = d;
        }
      console.log(this.day);
    }
  }
  getHours() {
    if (this.hours.length > 0) {
      this.hours = [];
    }
    for (const hour of this.days) {
      const h = hour.split('T')[1].split(':');
      const temp = h[0] + ':' + h[1];
      this.hours.push((temp));
    }
  }
  makeAnAppointment(hour: string) {
    if (this.date === undefined) {
      this.date = new Date(this.day);
    }
    this.date = new Date(this.date);
    // this.httpService.currentMessage.subscribe(data => this.id = data);
    this.doctorDetail.makeAnAppointment(this.date, hour, 13);
  }
  changeDate() {
    console.log('ta data: ' + this.date);
    this.doctorDetail.changeDate(this.date);
  }



}
