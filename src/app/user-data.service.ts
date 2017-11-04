import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../environments/environment';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserDataService {

  constructor(private http: Http) { }


  private extractData(res) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    return res.json() || {};
  }


  public updateRegistration(data) {
    // (updateRegistration && .put /signupsave) perform the following:
    //   - if token exists:
    //       - performs an edit (changes existing info in DB)
    //   - if token doesn't exist & 'name' column exisists in DB:
    //       - returns an error to the user
    //   - if token doesn't exist & 'name' column dosn't exisist:
    //       - performs a post and saves info to DB

    delete data.passwordcheck
    data.token = localStorage.getItem('token')
     return this.http.put(`${environment.apiUrl}/auth/signupsave`, data).map(response => response.json())
   }

  getUser(token): Observable<any> {
    // (getUser && .post /signup) perform the following:
    // - runs a GET request to db (uses id saved in token)
    // - returns user's info

    return this.http.post(`${environment.apiUrl}/auth/signup`, {token}).map(this.extractData)
  }

}
