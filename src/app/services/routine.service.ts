import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from '../app-config';

@Injectable({
  providedIn: 'root'
})
export class RoutineService {

  private appConfig: AppConfig = new AppConfig();
  private httpHeaders: HttpHeaders = new HttpHeaders();

  constructor(private http: HttpClient) { 
    // this.httpHeaders = new HttpHeaders({ 
    //   'Authorization' : sessionStorage.getItem('jwt'),
    //   'Access-Control-Allow-Origin': 'http://localhost'
    // });
  }

  getRoutines(date: string) {
    //return this.http.get(`${this.appConfig.apiUrl}/categories/routines`, { headers: this.httpHeaders });
    return this.http.get(`${this.appConfig.apiUrl}/categories/routinesbyday?date=${date}`);
  }
}
