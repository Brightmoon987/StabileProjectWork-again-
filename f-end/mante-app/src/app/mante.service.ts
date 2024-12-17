import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManteService {
  private apiUrl = 'http://localhost:3000/api/mante';

  constructor(private http: HttpClient) {}

  getMante(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}