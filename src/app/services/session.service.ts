import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app-config';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private appConfig: AppConfig = new AppConfig();

  constructor(private http: HttpClient) { }

  getSessions(date: string, routine: string) {
    return this.http.get(`${this.appConfig.apiUrl}/sessions/schedule/${date}/${routine}`);
  }

  scheduleSession(data) {
    return this.http.post(`${this.appConfig.apiUrl}/sessions/schedule`, data);
  }
}
