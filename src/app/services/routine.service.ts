import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoutineService {

  constructor(private http: HttpClient) { }

  getRoutines() {
    return this.http.get(`http://192.168.0.16:8000/routines`);
  }
}
