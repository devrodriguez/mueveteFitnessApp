import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }

  getSessions() {
    return this.http.get(`http://api.muevetefitness.com.co/sessions`);
  }

  scheduleSession(data) {
    return this.http.post(`http://api.muevetefitness.com.co/sessions/schedule`, data);
  }
}
