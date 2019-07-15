import { Component, OnInit } from '@angular/core';
import {HttpService} from '../service/http.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {TokenStorageService} from '../token-storage.service';
import {DoctorService} from '../service/doctor.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  info: any = {};

  constructor(private tokenStorage: TokenStorageService, private httpService: HttpService,
              private router: Router, private route: ActivatedRoute, private doctorService: DoctorService) {}

  ngOnInit(): void {
    this.info = {
      token: this.tokenStorage.getToken(),
      username: this.tokenStorage.getUsername(),
      id: this.tokenStorage.getUserId(),
      // birthDate: this.tokenStorage.getUserBirthDate(),
      fName: this.tokenStorage.getUserFName(),
      LName: this.tokenStorage.getUserLName()
    };
    // this.doctorService.setDoctorsList();
  }

  // get() {
  //   this.doctorService.getDoctorsLength();
  // }
  logout() {
    this.tokenStorage.removeToken();
    this.router.navigate(['']);
  }



}
