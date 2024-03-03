import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AngularConceptService {
  api = "http://localhost:3000/AngularConcepts";

  constructor(private http: HttpClient) { }

  getAngularConcept(): Observable<any>{
    const request = this.http.get<any>(this.api);
    return request;
  }
}
