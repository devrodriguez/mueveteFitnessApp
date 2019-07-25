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

  getScheduled(date: string, routine: string) {
    return this.http.get(`${this.appConfig.apiUrl}/sessions/schedule/${date}/${routine}`);
  }

  scheduleSession(data) {
    return this.http.post(`${this.appConfig.apiUrl}/sessions/schedule`, data);
  }
}
