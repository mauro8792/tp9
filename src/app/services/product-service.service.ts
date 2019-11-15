import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  url = "https://utn2019-avanzada2-tp9.herokuapp.com/api/products";
  constructor(private http: HttpClient) { }

  get(pageNumber, pageSize): Observable<any> {
    const token = localStorage.getItem('token');
    const uri = `${this.url}?page=${pageNumber}&size=${pageSize}`;
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization : 'Bearer ' + token,
      })
    };

    return this.http.get(uri, httpOptions);
  }
}
