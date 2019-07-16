import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoutineService {

  constructor(private http: HttpClient) { }

  getRoutines() {
    return this.http.get(`http://api.muevetefitness.com.co/routines`);
  }
}
