import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }

  getSessions() {
    return this.http.get(`http://192.168.0.16:8000/sessions`);
  }
}
