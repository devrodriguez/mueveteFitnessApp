import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app-config';

@Injectable({
  providedIn: 'root'
})
export class RoutineService {

  private appConfig: AppConfig = new AppConfig();

  constructor(private http: HttpClient) { }

  getRoutines() {
    return this.http.get(`${this.appConfig.apiUrl}/routines`);
  }
}
