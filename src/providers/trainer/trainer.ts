import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TrainerProvider {

  constructor(public http: HttpClient) {
    
  }

  getTrainers() {
    return this.http.get('http://192.168.6.253:8000/trainers')
  }

}
