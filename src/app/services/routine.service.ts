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
    this.httpHeaders = new HttpHeaders({ 'Authorization' :  sessionStorage.getItem('jwt')})
  }

  getRoutines() {
    return this.http.get(`${this.appConfig.apiUrl}/categories/routines`, { headers: this.httpHeaders });
  }
}
