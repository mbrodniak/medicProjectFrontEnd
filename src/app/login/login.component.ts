import { Component, OnInit, NgModule } from '@angular/core';
import {HttpService} from '../service/http.service';
import {Patient} from '../model/patient';
import {HttpClient, HttpClientModule, HttpHeaders, HttpParams} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {callNgModuleLifecycle} from '@angular/core/src/view/ng_module';
import {AuthLoginInfo} from '../model/authLoginInfo';
import {TokenStorageService} from '../token-storage.service';
import * as moment from 'moment';
import _date = moment.unitOfTime._date;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  roles = [];
  private authLogin: AuthLoginInfo

  constructor(private route: ActivatedRoute,
              private router: Router,
              private httpClient: HttpClient,
              private authService: AuthenticationService,
              private tokenStorage: TokenStorageService) {}

  ngOnInit() {

  }

  login() {

    this.authLogin = new AuthLoginInfo(
      btoa(this.form.username), btoa(this.form.password)
    );
    this.authService.login(this.authLogin).subscribe(data => {

        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);
        this.tokenStorage.saveUserId(data.id);
        this.tokenStorage.saveUserEmail(data.email);
        this.tokenStorage.saveUserFName(data.firstName);
        this.tokenStorage.saveUserLName(data.lastName);
        // this.tokenStorage.saveUserBirtDate(data.data);
        this.isLoggedIn = true;
        this.isLoginFailed = false;
        this.router.navigate(['home']);
    }

    );

  }
}
