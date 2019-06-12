import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/user';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnInit {

  constructor(private httpClient: HttpClient, private router: Router) { }

  model: any = {};



  ngOnInit(): void {
    sessionStorage.setItem('token', '');
  }


}
