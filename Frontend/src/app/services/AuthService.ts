import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
   private baseUrl = "http://localhost:9091/api/auth";

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post(this.baseUrl + "/login", data, {
      withCredentials: true
    });
  }

  register(data: any): Observable<any> {
    return this.http.post(this.baseUrl + "/register", data);
  }

  logout(): Observable<any> {
    return this.http.post(this.baseUrl + "/logout", {}, {
      withCredentials: true
    });
  }
}
