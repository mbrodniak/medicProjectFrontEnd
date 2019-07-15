import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/user';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {AuthLoginInfo} from '../model/authLoginInfo';
import {JwtResponse} from '../model/jwtResponse';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnInit {

  constructor(private httpClient: HttpClient, private router: Router) { }

  login(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>('http://localhost:8080/api/auth/signin', credentials, httpOptions);
  }

  ngOnInit(): void {
  }


}
