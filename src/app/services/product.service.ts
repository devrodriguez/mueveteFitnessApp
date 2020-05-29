import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`http://ME53P5PLVRDTISC62J4V1PQ8RCGQ95LL@ecommerce.starqsoft.com/api/products?output_format=JSON&display=full`);
  }
}
