import { Component, OnInit, NgModule } from '@angular/core';
import {HttpService} from '../service/http.service';
import {Patient} from '../model/patient';
import {HttpClient, HttpClientModule, HttpHeaders, HttpParams} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {callNgModuleLifecycle} from '@angular/core/src/view/ng_module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: Array<string> = [];
  credentials = {email: '', password: ''};
  constructor(private route: ActivatedRoute,
              private router: Router,
              private httpClient: HttpClient,
              private service: HttpService) {}

  ngOnInit() {
  }

  login() {
    this.service.login(this.credentials.email, this.credentials.password).subscribe(data => {
      console.log('Id in loginComponent: ' + data.id);
      this.service.changeMessage(data.id.toString());
    });
    this.service.currentMessage.subscribe(data => this.userId.push(data));
    console.log('This userID in logincmponent after subscribe: ' + this.userId.length);
    this.router.navigate(['/home', 1]);
  }

}
