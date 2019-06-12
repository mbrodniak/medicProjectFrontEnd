import { Component, OnInit } from '@angular/core';
import {HttpService} from '../service/http.service';
import {Patient} from '../model/patient';
import {User} from '../model/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  fileToUpload: File = null;

  constructor(private httpService: HttpService, public patient: Patient, public user: User) {}
  send() {
    this.httpService.sendCredentials(this.patient, this.fileToUpload).subscribe(date => console.log(date),
      error => console.log(error),
    );
  }
  fileInput(event) {
    this.fileToUpload = event.target.files[0];
  }

  ngOnInit(): void {
  }

}
