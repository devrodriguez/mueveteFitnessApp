import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TrainerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TrainerProvider {

  constructor(public http: HttpClient) {
    console.log('Hello TrainerProvider Provider');
  }

  getTrainers() {
    return this.http.get('http://localhost:8000/trainers')
  }

}
