import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  private baseUrl = "http://localhost:9091/api/issues";

  constructor(private http: HttpClient) { }

  issueBook(data:any):Observable<any>{

    return this.http.post(this.baseUrl,data);

  }

  returnBook(id:number):Observable<any>{

    return this.http.put(`${this.baseUrl}/${id}`,{});

  }

  getIssueHistory():Observable<any>{

    return this.http.get(this.baseUrl);

  }
}
