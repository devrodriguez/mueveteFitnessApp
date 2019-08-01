import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from '../app-config';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private appConfig: AppConfig = new AppConfig();
  private httpHeaders: HttpHeaders = new HttpHeaders();

  constructor(private http: HttpClient) { 
    //this.httpHeaders = new HttpHeaders({ 'Authorization' : sessionStorage.getItem('jwt')});
  }

  getSessions() {
    return this.http.get(`${this.appConfig.apiUrl}/sessions`);
  }

  getScheduled(date: string, routine: string, customer_id: string) {
    return this.http.get(`${this.appConfig.apiUrl}/sessions/scheduled/${date}/${routine}/${customer_id}`);
  }

  scheduleSession(data) {
    return this.http.post(`${this.appConfig.apiUrl}/sessions/schedule`, data);
  }

  cancelScheduled(data) {
    return this.http.post(`${this.appConfig.apiUrl}/sessions/scheduled/cancel`, data)
  }
}
