import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { AppConfig } from '../app-config';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  private appConfig: AppConfig;

  constructor(private http: HttpClient) { 
    this.appConfig = new AppConfig();
  }

  saveContactInfo(custInfo: any) {
    return this.http.post(`${this.appConfig.apiUrl}/customer/info`, custInfo);
  }
}
