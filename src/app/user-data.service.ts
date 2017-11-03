import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router'
import { environment } from '../environments/environment';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from './user'

@Injectable()
export class UserDataService {

  constructor(private http: Http, private router: Router) { }


  private extractData(res) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    return res.json() || {};
  }

  public register(data) {
     return this.http.put(`${environment.apiUrl}/auth/signupsave`, data).map((res:Response) => {
       console.log('what we get back',res.json())
       let response = res.json()
       if ( response.status === 200) {
         localStorage.setItem('token', response.token)
         this.router.navigate(['/subscription'])
       }
     }).subscribe()
  }

  getUser(token): Observable<any> {
    console.log('token before send', token)
    return this.http.post(`${environment.apiUrl}/auth/signup`, {token}).map(this.extractData)
  }

}
