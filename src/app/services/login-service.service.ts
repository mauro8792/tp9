import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  url = "https://utn2019-avanzada2-tp9.herokuapp.com/login"
  redirectUrl: string;
  constructor(private http: HttpClient) { }

  login(user: User): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(this.url, user, httpOptions)
      .pipe(
        map(response => this.setToken(response))
      );
  };

  private setToken(response: any): void {
    localStorage.setItem('token', response.jwt);
  };

  getToken() { return localStorage.getItem('token'); };
  
  logout(): void {
    this.setToken(" ");
  }
}
