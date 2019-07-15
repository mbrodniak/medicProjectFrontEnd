import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
  DoCheck,
  ViewChild,
  ElementRef,
  Inject, Renderer2, ViewChildren, QueryList
} from '@angular/core';
import {HttpService} from '../service/http.service';
import {ActivatedRoute} from '@angular/router';
import {Appointment} from '../model/appointment';
import {DoctorDetailComponent} from '../doctor-detail/doctor-detail.component';
import {Doctor} from '../model/doctor';
import {TokenStorageService} from '../token-storage.service';
import {ScheduleResponse} from '../model/scheduleResponse';
import {DOCUMENT} from '@angular/common';
import {element} from 'protractor';
import {async, delay} from 'q';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit, OnChanges, DoCheck {

  username: string;
  form: any = {};
  workingHours = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00',
    '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'];
  // response: ScheduleResponse;
  days: Array<number>;
  year: number;
  month: number;
  appointmentHours: Array<string>;
  @Input()doctorId: string;
  constructor(private tokenStorage: TokenStorageService, private httpService: HttpService, private renderer: Renderer2) {
    this.appointmentHours = [];
  }
  @ViewChildren('hour') hour: QueryList<ElementRef>;

  ngDoCheck(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
  }

  ngOnInit(): void {
    this.username = this.tokenStorage.getUsername();
    console.log('OnInit');
  }
  getWeek() {
    this.httpService.getAppointments(this.form.date.toString(), this.doctorId).subscribe(data => {
      this.appointmentHours = data;
    }, error1 => {
      console.log(error1);
    },
      () => this.changeColor());
  }
  changeColor() {
    const innerTexts = [];
    this.hour.forEach(el => innerTexts.push( el.nativeElement));
    for (const td of innerTexts) {
      if (this.appointmentHours.includes(td.innerText)) {
        this.renderer.setStyle(td, 'background-color', 'red');
      }
    }
  }
  log(hour: string) {
    console.log('Clicked hour: ' + hour);
  }
}
