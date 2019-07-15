import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {HttpService} from '../service/http.service';
import {Doctor} from '../model/doctor';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.css'],
})
export class DoctorDetailComponent implements OnInit, OnChanges {

  id: string;
  doctor: Doctor;
  // @Input() doctorList: Array<Doctor> = [];
  constructor(private route: ActivatedRoute, private httpService: HttpService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id').toString();
    this.httpService.getDoctor(this.id).subscribe((data: Doctor) => {
      this.doctor = data;
    });
  }



}
