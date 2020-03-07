import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app-config';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private appConfig: AppConfig = new AppConfig();
  

  constructor(private http: HttpClient) { }

  login(user) {
    return this.http.post(`${this.appConfig.apiUrl}/auth/login`, user);
  }

  register(user) {
    return this.http.post(`${this.appConfig.apiUrl}/customers`, user)
  }

  passwordForgotten(user: UserModel) {
    return this.http.post(`${this.appConfig.apiUrl}/auth/forgotten`, user);
  }
}
